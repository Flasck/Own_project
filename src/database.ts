import { verbose } from "sqlite3";
import * as path from "path";
const sqlite3 = verbose();

export class DataBase
{
	private db;
	constructor(dbpath: string)
	{
		dbpath = path.resolve(__dirname, dbpath)
		this.db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, e =>
		{
			if (e) throw e;
			console.log(`Connected to the ${dbpath} database.`);
		});
	}

	public all(sql: string, params: string[]): Promise<Row[]>
	{
		return this.req(this.db.all.bind(this.db, sql, params));
	}

	public first(sql: string, params: string[]): Promise<Row>
	{
		return this.req(this.db.get.bind(this.db, sql, params));
	}

	public commit(sql: string, params: string[]): Promise<void>
	{
		return this.req(this.db.run.bind(this.db, sql, params));
	}

	private req<T>(f: (f: (e: any, rows: any) => void) => void): Promise<T>
	{
		return createPromise((resolve, reject) =>
		{
			f((err, rows) =>
			{
				if (err) reject(err);
				else resolve(rows);
			});
		});
	}
}

function createPromise<T>(f: (resolve: (result: T) => void, reject: (reason: any) => void) => void): Promise<T>
{
	return new Promise((resolve, reject) =>
	{
		try
		{
			f(resolve, reject);
		}
		catch (e)
		{
			reject(e)
		}
	});
}

export interface Row
{
	[column: string]: string,
}
