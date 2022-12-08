import { Api } from "./api";


Api.addRoute("/", async q =>
{
	return {
		"/people": [{ id: "number", name: "string", description: "string" }],
	};
}, true);


Api.addRouteSqlFirst("/people?id",
	`SELECT id, name, description
	FROM People
	WHERE id = ?
`, ["id"]);

Api.addRouteSqlAll("/people",
	`SELECT id, name, description
	FROM People
`, []);

