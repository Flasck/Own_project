import { useCallback, useRef } from "react";


export function useIntersectionObserver(options, cb)
{
	const observer = useRef(null);

	return useCallback((node) =>
	{
		if (!node)
		{
			if (observer.current)
				observer.current.disconnect();
			return
		}

		observer.current = new IntersectionObserver(cb, options)
		observer.current.observe(node);
	}, []);
}
