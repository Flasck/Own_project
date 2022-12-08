import { verbose } from 'sqlite3';
import * as path from 'path';
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
		return new Promise(resolve =>
		{
			this.db.all(sql, params, (err, rows) =>
			{
				if (err) throw err;
				resolve(rows);
			});
		});
	}

	public first(sql: string, params: string[]): Promise<Row>
	{
		return new Promise(resolve =>
		{
			this.db.get(sql, params, (err, row) =>
			{
				if (err) throw err;
				resolve(row);
			});
		});
	}
}

export interface Row
{
	[column: string]: string,
}
