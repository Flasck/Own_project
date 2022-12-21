export function classNames(...names)
{
	return names.filter(v => !!v).join(" ");
}
