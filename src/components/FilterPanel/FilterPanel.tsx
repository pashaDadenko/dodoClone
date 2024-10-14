'use client';

import { Title } from '../Ui/Title';
import { Checkbox } from '../Ui/Checkbox';
import { ChangeEvent, FC, useState } from 'react';

import styles from './FilterPanel.module.scss';

export const FilterPanel: FC = () => {
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};

	return (
		<div className={styles.wrapper}>
			<Title text='Фильтрация' fontSize='22px' marginBottom='30px' />

			<Checkbox checked={checked} onChange={handleCheckboxChange} label='Можно собирать' />
			<Checkbox checked={checked} onChange={handleCheckboxChange} label='Новинки' />
		</div>
	);
};
