import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Title } from '@/components/Ui/Title';

import styles from './ProductCard.module.scss';

type Props = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	ingredients: string;
};

export const ProductCard: FC<Props> = ({ id, name, price, imageUrl, ingredients }) => {
	return (
		<div className={styles.wrapper}>
			<Link href={`/product/${id}`}>
				<div className={styles.imageWrapper}>
					<Image src={imageUrl} alt={name} width={215} height={215} />
				</div>
				<Title text={name} fontSize='22px' margin='10px 0 7px' />
				<p className={styles.ingredients}>{ingredients}</p>
			</Link>
			<div className={styles.container}>
				<p className={styles.price}>
					от <span className={styles.priceValue}>{price} ₽</span>
				</p>
				<button className={styles.button}>
					<Plus />
					Собрать
				</button>
			</div>
		</div>
	);
};
