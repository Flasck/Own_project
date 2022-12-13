import React, { useEffect, useRef } from "react";
import { classnames } from "@utils/classnames"
import styles from "./Placeholder.module.css"


export function Placeholder({ className, style, width, height, rounded, widthD, heightD, unitW, unitH })
{
	const ref = useRef();
	useEffect(() =>
	{
		let w = width;
		let h = height;

		unitW = unitW || "ch";
		unitH = unitH || "em";

		if (width && widthD) w = `${width + Math.floor(Math.random() * widthD) - widthD / 2}${unitW}`;
		else if (width) w = `${w}${unitW}`;
		if (height && heightD) h = `${width + Math.floor(Math.random() * widthD) - widthD / 2}${unitH}`;
		else if (height) h = `${h}${unitH}`;

		w = w || "100%";
		h = h || "100%";
		ref.current.style.setProperty("--data-width", `${w}`);
		ref.current.style.setProperty("--data-height", `${h}`);

		const rect = ref.current.getBoundingClientRect();
		ref.current.style.setProperty("--data-x", `${rect.left}px`);
		ref.current.style.setProperty("--data-y", `${rect.top}px`);
		ref.current.style.setProperty("--data-w", `${window.innerWidth}px`);
		ref.current.style.setProperty("--data-h", `${window.innerHeight}px`);
	}, [ref, width, height, widthD, heightD, unitW, unitH]);

	return <div className={classnames(className, styles.root)} style={style}>
		<div className={classnames(styles.inner, rounded ? styles.inner_rounded : "")} ref={ref}>#</div>
	</div>
}
