import React from "react";
import { Placeholder } from "@components/Placeholder/Placeholder";
import { Card } from "./Card/Card";
import styles from "./HeroBlock.module.css";
import { Arrow } from "./Arrow";

export const HeroBlockPlaceholder = () => <section className={styles.root}>
	<div className={styles.leftBlock}>
		<Placeholder className={styles.title} height={3} />
		<Placeholder className={styles.subTitle} height={3} />
	</div>
	<div className={styles.rightBlock}>
		<Card title="01" text={<Placeholder height={3} />} />
		<Arrow />
		<Card title="02" text={<Placeholder height={3} />} />
		<Arrow />
		<Card title="03" text={<Placeholder height={4} />} />
	</div>
</section>;
