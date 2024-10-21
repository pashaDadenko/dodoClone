'use client';

import { FC } from 'react';
import { Title } from '@/components/Ui/Title';
import { Checkbox, CheckboxProps } from '@/components/Ui/Checkbox';

import styles from './IngredientsCheckbox.module.scss';

type Item = CheckboxProps;

type Props = {
	items?: Item[];
	limit?: number;
	defaultItems?: Item[];
	defaultValue?: Item[];
	onChange?: (items: string[]) => void;
};

export const IngredientsCheckbox: FC<Props> = ({ items, limit, defaultItems, defaultValue, onChange }) => {
	return (
		<>
			<Title text='Ингредиенты:' fontSize='16px' marginBottom='15px' />
			<input className={styles.searchInput} type='search' placeholder='Поиск...' onChange={() => {}} />
			<div>
				{items?.map((item, index) => (
					<Checkbox key={index} name={item.name} label={item.label} checked={item.checked} onChange={() => onChange} />
				))}
			</div>
		</>
	);
};
