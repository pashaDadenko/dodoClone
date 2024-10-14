'use client';

import { FC, useState } from 'react';

import styles from './Categories.module.scss';

export const Categories: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const categoriesList = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];

	const categoriesHandler = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.wrapper}>
			{categoriesList.map((category, index) => (
				<button className={styles.button} data-active={activeIndex === index} key={index} onClick={() => categoriesHandler(index)}>
					{category}
				</button>
			))}
		</div>
	);
};
