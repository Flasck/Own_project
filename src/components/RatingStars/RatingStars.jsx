import React, { useRef, useState } from "react";
import { classNames } from "@utils/classNames"
import styles from "./RatingStars.module.css"

const StarIcon = () =>
	<svg className={styles.star} viewBox="0 0 24 24">
		<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
	</svg>

const StarBorderIcon = () =>
	<svg className={styles.star} viewBox="0 0 24 24">
		<path
			/* eslint-disable-next-line max-len */
			d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
		/>
	</svg>

export const RatingStars = ({ count, cb = () => { }, isWorking, className, big = false }) =>
{
	const emptyIcon = StarBorderIcon;
	const filledIcon = StarIcon;
	const [activeStar, setActiveStar] = useState(count);
	const ratingContainerRef = useRef(null);

	const calculateRating = e =>
	{
		const { width, left } = ratingContainerRef.current.getBoundingClientRect();
		const percent = (e.clientX - left) / width;
		const numberInStars = percent * 5;
		const nearestNumber = Math.round((numberInStars + 0.5 / 2) / 0.5) * 0.5;

		return Number(nearestNumber.toFixed(0.5.toString().split(".")[1]?.length || 0));
	};

	const handleClick = e =>
	{
		if (isWorking)
		{
			if (activeStar === calculateRating(e))
			{
				setActiveStar(0)
				cb(0)
			}
			else
			{
				setActiveStar(calculateRating(e));
				cb(calculateRating(e))
			}
		}
	};
	const EmptyIcon = emptyIcon;
	const FilledIcon = filledIcon;

	return <div className={classNames(className, big && styles.star_big)}>
		<div
			style={{
				display: "inline-flex",
				position: "relative",
				cursor: isWorking ? "pointer" : "default",
				textAlign: "left",
				width: "fit-content",
			}}
			onClick={handleClick}
			ref={ratingContainerRef}
		>
			{[...new Array(5)].map((arr, index) =>
			{
				const showEmptyIcon = activeStar === 0 || activeStar < index + 1;

				const isActiveRating = activeStar !== 1;
				const isRatingWithPrecision = activeStar % 1 !== 0;
				const isRatingEqualToIndex = Math.ceil(activeStar) === index + 1;
				const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

				return <div
					style={{
						position: "relative",
						cursor: isWorking ? "pointer" : "default",
					}}
					key={index}
				>
					<div
						style={{
							width: showRatingWithPrecision ? `${(activeStar % 1) * 100}%` : "0%",
							overflow: "hidden",
							position: "absolute",
						}}
					>
						<FilledIcon />
					</div>
					<div>
						{showEmptyIcon ? <EmptyIcon /> : <FilledIcon />}
					</div>
				</div>
			})}
		</div>
	</div>
}
