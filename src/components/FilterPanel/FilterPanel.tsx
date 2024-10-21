import { FC } from 'react';
import { Title } from '../Ui/Title';
import { FilterCriteria } from './FilterCriteria/FilterCriteria';
import { PriceRangeSlider } from './PriceRangeSlider/PriceRangeSlider';
import { IngredientsCheckbox } from './IngredientsCheckbox/IngredientsCheckbox';

import styles from './FilterPanel.module.scss';

export const FilterPanel: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Title text='Фильтрация' fontSize='22px' marginBottom='30px' />
			<FilterCriteria />
			<PriceRangeSlider />
			{/* работаем с IngredientsCheckbox */}
			<IngredientsCheckbox />
		</div>
	);
};
