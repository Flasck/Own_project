import { Api } from "./api";


Api.addRoute("/", async q =>
{
	return {
		"/person": [{ id: "number", name: "string", description: "string", technologies: "string[]" }],
	};
}, true);


Api.addRouteSqlAll("/person",
	`Select p1.id, p1.name, p2.description, group_concat(pt.name, ';') as technology
	From
		(Select personId as id, text as name
		From Person_Text as pt
		Inner Join TextType as tt
		On pt.typeId = tt.id
		Where langId == (Select id From Lang Where name = $1)
			And tt.name = 'name') p1
	Inner Join
		(Select personId as id, text as description
		From Person_Text as pt
		Inner Join TextType as tt
		On pt.typeId = tt.id
		Where langId == (Select id From Lang Where name = $1)
				And tt.name = 'description') p2
	On p1.id = p2.id

	Inner Join (
		Select pt.personId, t.name
		From Person_Technology as pt
		Inner Join Technology as t
		On t.id = pt.technologyId
		) pt

	On pt.personId = p1.id

	Group By p1.id
`, [["lang", "ru"]], rows =>
	{
		rows.forEach(row => {
			(<any>row["technology"]) = row["technology"].split(";");
		});
		return rows
	}
);

