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
	`select p.id,
		(select text
			from Text as pt
			inner join TextType as tt On pt.typeId = tt.id and tt.name = 'personName'
			inner join Lang as l On pt.langId = l.id and l.name = $1
			where pt.objId = p.id) as name,
		(select text
			from Text as pt
			inner join TextType as tt On pt.typeId = tt.id and tt.name = 'personDescription'
			inner join Lang as l On pt.langId = l.id and l.name = $1
			where pt.objId = p.id) as description,
		(select json_group_array(t.name)
			from Person_Technology as pt
			inner join Technology as t
			On t.id = pt.technologyId
			where pt.personId = p.id) as technology
	from Person as p
	order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	 ...row,
	technology: JSON.parse(row.technology),
})));

Api.addRouteSqlAll("/places",
	`select (select text
		from Text as pt
		inner join TextType as tt On pt.typeId = tt.id and l.name = $1
		inner join Lang as l On pt.langId = l.id and tt.name = 'personName'
		where pt.objId = p.personId) as person,
		json_group_array(
			(json_object('address',
				(select text
				from Text as pt
				inner join TextType as tt On pt.typeId = tt.id and l.name = $1
				inner join Lang as l On pt.langId = l.id and tt.name = 'address'
				where pt.objId = p.id),
			'coords', coords))) as places
	from Place as p
	group By person
	order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	...row,
	places: JSON.parse(row.places),
})));
