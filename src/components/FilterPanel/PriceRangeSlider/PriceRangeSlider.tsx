'use client';

import { FC, useState } from 'react';
import { Title } from '@/components/Ui/Title';
import { Divider } from '@/components/Ui/Divider';

import styles from './PriceRangeSlider.module.scss';

export const PriceRangeSlider: FC = () => {
	const [firstPrice, setFirstPrice] = useState(0);
	const [secondPrice, setSecondPrice] = useState(100);

	const handleFirstPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstPrice(+event.target.value);
	};

	const handleSecondPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSecondPrice(+event.target.value);
	};

	return (
		<>
			<Title text='Цена от и до:' fontSize='16px' margin='0 0 15px 0' />
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<input className={styles.input} type='number' min={0} max={1000} value={firstPrice} onChange={() => {}} />
					<span className={styles.currencySymbol}>₽</span>
				</div>
				<div className={styles.container}>
					<input className={styles.input} type='number' min={100} max={1000} value={secondPrice} onChange={() => {}} />
					<span className={styles.currencySymbol}>₽</span>
				</div>
			</div>
			<div className={styles.wrapper}>
				<input className={styles.rangeInput} type='range' min={0} max={1000} value={firstPrice} onChange={handleFirstPriceChange} />
				<input className={styles.rangeInput} type='range' min={100} max={1000} value={secondPrice} onChange={handleSecondPriceChange} />
			</div>
			<Divider />
		</>
	);
};
