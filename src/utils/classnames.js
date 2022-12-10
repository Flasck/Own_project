export function classnames(...names)
{
	return names.filter(v => !!v).join(' ');
}