'use client';

import { Title } from '@/components/Ui/Title';
import { ChangeEvent, FC, useState } from 'react';
import { Checkbox, CheckboxProps } from '@/components/Ui/Checkbox';

import styles from './IngredientsCheckbox.module.scss';

type Item = CheckboxProps;

type Props = {
	items: Item[];
	limit?: number;
};

export const IngredientsCheckbox: FC<Props> = ({ items, limit = 7 }) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const displayedItems = showAll ? items.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase())) : items.slice(0, limit);

	return (
		<>
			<Title text='Ингредиенты:' fontSize='16px' margin='0 0 15px 0' />
			{showAll && <input className={styles.searchInput} type='search' placeholder='Поиск...' value={searchValue} onChange={handleSearchInput} />}
			<div className={showAll ? styles.itemsContainer : ''}>
				{displayedItems.map((item, index) => (
					<Checkbox key={index} name={item.name} label={item.label} checked={item.checked} onChange={() => {}} />
				))}
			</div>

			{items.length > limit && (
				<button className={styles.showMoreButton} onClick={() => setShowAll(!showAll)}>
					{showAll ? 'Скрыть' : 'Показать все'}
				</button>
			)}
		</>
	);
};
