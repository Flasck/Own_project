import { Api } from "./api";


Api.addRoute("/", async q =>
{
	return {
		"/person": [{ id: "number", name: "string", description: "string", technologies: "string[]" }],
	};
}, true);


Api.addRouteSqlAll("/person",
	`Select p.id,
		(Select text
			From Person_Text as pt
			Inner Join TextType as tt On pt.typeId = tt.id and tt.name = 'name'
			Inner Join Lang as l On pt.langId = l.id and l.name = $1
			Where pt.personId = p.id) as name,
		(Select text
			From Person_Text as pt
			Inner Join TextType as tt On pt.typeId = tt.id and tt.name = 'description'
			Inner Join Lang as l On pt.langId = l.id and l.name = $1
			Where pt.personId = p.id) as description,
		(Select json_group_array(t.name)
			From Person_Technology as pt
			Inner Join Technology as t
			On t.id = pt.technologyId
			Where pt.personId = p.id) as technology
	From Person as p
	Order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	 ...row,
	technology: JSON.parse(row.technology),
})));

		From Person_Text as pt
