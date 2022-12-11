import { Api } from "./api";


Api.addRoute("/", async q =>
{
	return {
		"/people": [{ id: "number", name: "string", description: "string", technologies: "string[]" }],
	};
}, true);


Api.addRouteSqlAll("/people",
	`SELECT p1.id, p1.name, p2.description, group_concat(pt.name, ';') as technology
	FROM
		(SELECT people as id, text as name
		FROM People_Text as pt
		INNER JOIN TextType as tt
		ON pt.type = tt.id
		WHERE lang == (Select id From Lang Where name = $1)
			AND tt.name = 'name') p1
	INNER JOIN
		(SELECT people as id, text as description
		FROM People_Text as pt
		INNER JOIN TextType as tt
		ON pt.type = tt.id
		WHERE lang == (Select id From Lang Where name = $1)
				AND tt.name = 'description') p2
	ON p1.id = p2.id

	INNER JOIN (
		Select pt.people, t.name
		From People_Technology as pt
		INNER JOIN Technology as t
		ON t.id = pt.technology
		) pt

	ON pt.people = p1.id

	GROUP BY p1.id
`, [["lang", "ru"]], rows =>
	{
		rows.forEach(row => {
			(<any>row["technology"]) = row["technology"].split(";");
		});
		return rows
	}
);

