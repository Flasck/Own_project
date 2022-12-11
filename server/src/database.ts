import { verbose } from "sqlite3";
import * as path from "path";
const sqlite3 = verbose();

export class DataBase
{
	private db;
	constructor(dbpath: string)
	{
		dbpath = path.resolve(__dirname, dbpath)
		this.db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY, e =>
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

	private req<T>(f: (f: (e: any, rows: any) => void) => void): Promise<T>
	{
		return new Promise((resolve, reject) =>
		{
			try
			{
				f((err, rows) =>
				{
					if (err) reject(err);
					else resolve(rows);
				});
			}
			catch (e)
			{
				reject(e)
			}
		});
	}
}

export interface Row
{
	[column: string]: string,
}
