'use client';

import { Title } from '../Ui/Title';
import { Divider } from '../Ui/Divider';
import { Checkbox } from '../Ui/Checkbox';
import { ChangeEvent, FC, useState } from 'react';
import { PriceInput } from './PriceInput/PriceInput';

import styles from './FilterPanel.module.scss';

export const FilterPanel: FC = () => {
	const [checkedState, setCheckedState] = useState({
		canGather: false,
		isNew: false,
		cheeseSauce: false,
	});

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setCheckedState((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	return (
		<div className={styles.wrapper}>
			<Title text='Фильтрация' fontSize='22px' marginBottom='30px' />
			<Checkbox name='canGather' label='Можно собирать' checked={checkedState.canGather} onChange={handleCheckboxChange} />
			<Checkbox name='isNew' label='Новинки' checked={checkedState.isNew} onChange={handleCheckboxChange} />

			<Divider />
			<PriceInput />
			<Divider margin='30px 0 20px 0' />

			{/* закончил тут */}
			<Title text='Ингредиенты:' fontSize='16px' marginBottom='15px' />
			<Checkbox name='cheeseSauce' label='Сырный соус' checked={checkedState.cheeseSauce} onChange={handleCheckboxChange} />
		</div>
	);
};
