import * as Url from "url";
import { DataBase, Row } from "./database";


class API
{
	private routes: RouteData[] = [];
	public PrettyPrint = false;
	public db = new DataBase("../data/db.db");

	public async process(url: string): Promise<ApiResponse>
	{
		const urlParsed = Url.parse(url, true);
		if (urlParsed.pathname)
		{
			for (const route of this.routes)
			{
				if (this.checkRoute(route, urlParsed.pathname, urlParsed.query))
				{
					try
					{
						const r = await route.route(urlParsed.query);
						return {
							status: 200,
							body: route.prettyPrint || this.PrettyPrint ? JSON.stringify(r, undefined, 4) : JSON.stringify(r)
						};
					}
					catch (e)
					{
						if (e instanceof RouteError)
						{
							return { status: 400, body: e.message };
						}

						console.log(`Error: route: ${route.path + "?" + route.reqParams.join("&")}; path: ${urlParsed.pathname}; query: ${JSON.stringify(urlParsed.query)}`);
						console.log(e);

						return { status: 500, body: "API error" };
					}
				}
			}
		}
		return { status: 404, body: "Page not found" };
	}

	public addRoute(path: string, route: Route, prettyPrint = false)
	{
		const pathSplited = path.split("?");
		this.routes.push({
			route,
			path: pathSplited[0],
			reqParams: pathSplited.length == 2 ? pathSplited[1].split("&") : [],
			prettyPrint,
		});
	}

	public addRouteSqlFirst(path: string, sql: string, queryParams: QueryParams, postprocess?: PostprocessData<Row>)
	{
		this.addRouteSql(path, sql, queryParams, true, postprocess);
	}
	public addRouteSqlAll(path: string, sql: string, queryParams: QueryParams, postprocess?: PostprocessData<Row[]>)
	{
		this.addRouteSql(path, sql, queryParams, false, postprocess);
	}

	private addRouteSql<T extends Row | Row[]>(path: string, sql: string, queryParams: QueryParams, first: boolean, postprocess?: PostprocessData<T>)
	{
		this.addRoute(path, async q =>
		{
			const params: string[] = [];
			for (const paramKey of queryParams)
			{
				if (typeof paramKey == "string")
				{
					const v = q[paramKey];
					if (!v) throw new RouteError(`param ${paramKey} is undefined`);
					params.push(typeof v == "object" ? v[0] : v);
				}
				else
				{
					const v = q[paramKey[0]] || paramKey[1];
					params.push(typeof v == "object" ? v[0] : v);
				}
			}

			let res;
			if (first) res = await Api.db.first(sql, params);
			else res = await Api.db.all(sql, params);

			if (res === undefined) throw new RouteError(`Not Found`);
			if (postprocess) res = await postprocess(<T>res);

			return res;
		});
	}

	private checkRoute(route: RouteData, path: string, params: Query)
	{
		if (route.path != path) return false;
		for (const param of route.reqParams)
		{
			if (!Object.prototype.hasOwnProperty.call(params, param))
				return false;
		}
		return true;
	}
}

class RouteError extends Error { };


interface ApiResponse
{
	status: number,
	body: string,
}

type PostprocessData<T> = (rows: T) => any;
type QueryParams = (string | [string, string])[];
type Query = { [key: string]: string | string[] | undefined };
type Route = (query: Query) => Promise<any>;
interface RouteData
{
	route: Route,
	path: string,
	reqParams: string[],
	prettyPrint: boolean,
}

export const Api = new API();
