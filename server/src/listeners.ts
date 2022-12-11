import { Api } from "./api";


Api.addRoute("/", async q =>
{
	return {
		"?lang=en": "Use 'en' lang",
		"?lang=ru": "Use 'ru' lang",
		"/person": [{ id: "number", name: "string", description: "string", technologies: "string[]" }],
		"/places": [{ person: "string", places: { address: "string", coods: "string" } }],
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

Api.addRouteSqlAll("/places",
	`Select (Select text
		From Person_Text as pt
		Inner Join TextType as tt On pt.typeId = tt.id and l.name = $1
		Inner Join Lang as l On pt.langId = l.id and tt.name = 'name'
		Where pt.personId = p.personId) as person,
		json_group_array((json_object('address', address, 'coords', coords))) as places
	From Place as p
	Group By person
	Order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	...row,
	places: JSON.parse(row.places),
})));
