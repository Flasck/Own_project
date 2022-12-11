import { Api } from "./api";


Api.addRouteJSON("/", async q =>
{
	return {
		"?lang=en": "Use 'en' lang",
		"?lang=ru": "Use 'ru' lang",
		"image?id": "PNG image",
		"text?lang": "JSON with texts",
		"/person": [{ id: "number", name: "string", description: "string", technologies: "string[]" }],
		"/places": [{ person: "string", places: { address: "string", coods: "string" } }],
		"/projects": [{ id: "number", title: "string", date: "string", imageId: "string | null", description: "string", type: "string", authors: "string[]", technologies: "string[]", }],
	};
}, true);


Api.addRouteSqlAll("/person",
	`select p.id,
		(select text
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'personName'
			inner join Lang as l on t.langId = l.id and l.name = $1
			where t.objId = p.id) as name,
		(select text
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'personDescription'
			inner join Lang as l on t.langId = l.id and l.name = $1
			where t.objId = p.id) as description,
		(select json_group_array(t.name)
			from Person_Technology as t
			inner join Technology as t
			on t.id = t.technologyId
			where t.personId = p.id) as technology
	from Person as p
	order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	 ...row,
	technology: JSON.parse(row.technology),
})));

Api.addRouteSqlAll("/places",
	`select (select text
		from Text as t
		inner join TextType as tt on t.typeId = tt.id and l.name = $1
		inner join Lang as l on t.langId = l.id and tt.name = 'personName'
		where t.objId = p.personId) as person,
		json_group_array(
			(json_object('address',
				(select text
				from Text as t
				inner join TextType as tt on t.typeId = tt.id and l.name = $1
				inner join Lang as l on t.langId = l.id and tt.name = 'address'
				where t.objId = p.id),
			'coords', coords))) as places
	from Place as p
	group By person
	order by p.id
`, [["lang", "ru"]], rows => rows.map(row => ({
	...row,
	places: JSON.parse(row.places),
})));

Api.addRouteSqlAll("/projects",
	`select id,
		(select text
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'projectName'
			inner join Lang as l on t.langId = l.id and l.name = $1
			where t.objId = p.id) as title,
		date, image as imageId,
		(select text
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'projectDescription'
			inner join Lang as l on t.langId = l.id and l.name = $1
			where t.objId = p.id) as description,
		(select text
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'projectType'
			inner join Lang as l on t.langId = l.id and l.name = $1
			where t.objId = p.typeId) as type,
		(select json_group_array(text)
			from Text as t
			inner join TextType as tt on t.typeId = tt.id and tt.name = 'personName'
			inner join Lang as l on t.langId = l.id and l.name = $1
			inner join Project_Person as pp on pp.personId = t.objId and pp.projectId = p.id) as authors,
		(select json_group_array(name)
			from Project_Technology as pt
			inner join Technology as t on pt.technologyId = t.id
			where projectId = p.id) as technologies
	from Project as p
`, [["lang", "ru"]], rows => rows.map(row => ({
	...row,
	authors: JSON.parse(row.authors),
	technologies: JSON.parse(row.technologies),
})));


Api.addRoute("/image?id", "png", async (q, h) =>
{
	if (q.id == undefined) throw new Api.RouteError("param id is undefined");
	const id = (typeof q.id == "string" ? q.id : q.id[0]).trim();
	if (q.id == "") throw new Api.RouteError("param id is undefined");
	if (id.indexOf("/") >= 0) throw new Api.RouteError("bad param id");

	h["Content-Disposition"] = `inline; filename="${id}"`;
	h["Cache-Control"] = `public, max-age=${360 * 24 * 60 * 60 * 1000}`;
	return await Api.readFile(`../data/imgs/${id}`, null);
});

const Langs = ["ru", "en"];
Api.addRoute("/text", "json", async q =>
{
	if (q.lang == undefined) q.lang = Langs[0];
	let lang = typeof q.lang == "string" ? q.lang : q.lang[0];
	lang = lang.trim();
	if (Langs.indexOf(lang) < 0) lang = Langs[0];
	return await Api.readFile(`../data/text/${lang}.json`, "utf8");
});
