import { FC } from 'react';
import { Title } from '../Ui/Title';
import { FilterCriteria } from './FilterCriteria/FilterCriteria';
import { PriceRangeSlider } from './PriceRangeSlider/PriceRangeSlider';
import { IngredientsCheckbox } from './IngredientsCheckbox/IngredientsCheckbox';

import styles from './FilterPanel.module.scss';

export const FilterPanel: FC = () => {
	const items = [
		{ name: 'canGather', label: 'Можно собирать', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
	];

	return (
		<div className={styles.wrapper}>
			<Title text='Фильтрация' fontSize='22px' margin=' 0 0 30px 0' />
			<FilterCriteria />
			<PriceRangeSlider />
			<IngredientsCheckbox items={items} />
		</div>
	);
};
