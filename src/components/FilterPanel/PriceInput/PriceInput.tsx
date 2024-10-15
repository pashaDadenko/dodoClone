'use client';

import { FC, useState } from 'react';
import { Title } from '@/components/Ui/Title';

import styles from './PriceInput.module.scss';

type Props = {};

export const PriceInput: FC<Props> = ({}) => {
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
			<Title text='Цена от и до:' fontSize='16px' marginBottom='15px' />
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<input className={styles.input} type='с' min={0} max={1000} defaultValue={0} value={firstPrice} />
					<span className={styles.currencySymbol}>₽</span>
				</div>
				<div className={styles.container}>
					<input className={styles.input} type='number' min={100} max={1000} defaultValue={100} value={secondPrice} />
					<span className={styles.currencySymbol}>₽</span>
				</div>
			</div>

			<div className={styles.wrapper}>
				<input className={styles.rangeInput} type='range' min={0} max={1000} value={firstPrice} onChange={handleFirstPriceChange} />
				<input className={styles.rangeInput} type='range' min={100} max={1000} value={secondPrice} onChange={handleSecondPriceChange} />
			</div>
		</>
	);
};
