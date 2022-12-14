import React, { useEffect, useRef, useState } from "react";
import { classNames } from "@utils/classNames"
import styles from "./Placeholder.module.css"

export const Placeholder = ({ className, style, width, height, widthD, heightD, unitW, unitH, disableText }) =>
{
	const [text, setText] = useState("#");
	const ref = useRef();
	useEffect(() =>
	{
		let w = width;
		let h = height;

		unitW = unitW || "ch";
		unitH = unitH || "em";

		if (width && widthD) w = `${width + Math.floor(Math.random() * widthD) - widthD / 2}${unitW}`;
		else if (width) w = `${w}${unitW}`;
		if (height && heightD) h = `${height + Math.floor(Math.random() * heightD) - heightD / 2}${unitH}`;
		else if (height) h = `${h}${unitH}`;

		w = w || "100%";
		h = h || "100%";
		ref.current.style.setProperty("--data-width", `${w}`);
		ref.current.style.setProperty("--data-height", `${h}`);

		const rect = ref.current.getBoundingClientRect();
		ref.current.style.setProperty("--data-x", `${rect.left}px`);
		ref.current.style.setProperty("--data-y", `${rect.top}px`);
		ref.current.style.setProperty("--data-w", `${window.innerWidth}px`);
		ref.current.style.setProperty("--data-h", `${Math.max(window.innerHeight, document.body.scrollHeight)}px`);
		if (!disableText) type(generateText(width || 20 * (height || 1)), setText);
		else ref.current.style.color = "transparent";
	}, [ref, width, height, widthD, heightD, unitW, unitH]);

	return <span className={classNames(className, styles.root)} style={style}>
		<span className={classNames(styles.inner)} ref={ref}>{text}</span>
	</span>
}

async function type(text, setText)
{
	for (let i = 0; i < text.length; i++)
	{
		setText(text.slice(0, i + 1));
		await wait(Math.random() * 100 + 10);
	}
}
async function wait(t)
{
	return new Promise(r => setTimeout(r, t));
}

/* eslint-disable-next-line max-len */
const s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo volutpat tempor. Mauris bibendum urna eu diam ornare convallis. Suspendisse potenti. Sed tristique auctor enim, quis gravida ante viverra id. Sed a suscipit justo. Vestibulum leo dui, pulvinar tempor suscipit id, lobortis vitae quam. Vivamus orci lectus, sagittis in tellus."
	.split(" ");

function generateText(len)
{
	let text = "";
	while (text.length < len)

		text += ` ${s[Math.floor(Math.random() * s.length)]}`;

	return text.slice(1, len - 1);
}
