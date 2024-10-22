import { FC } from 'react';
import { ProductCard } from './ProductCard/ProductCard';

import styles from './ProductList.module.scss';

const products = [
	{
		id: 1,
		name: 'Сырный цыпленок',
		price: 550,
		ingredients: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
	{
		id: 2,
		name: 'Мясная пицца',
		price: 650,
		ingredients: 'Пепперони, ветчина, бекон, сыр моцарелла, томатный соус',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
	{
		id: 3,
		name: 'Вегетарианская пицца',
		price: 600,
		ingredients: 'Грибы, болгарский перец, оливки, сыр моцарелла, томатный соус',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
	{
		id: 4,
		name: 'Пицца Гавайи',
		price: 700,
		ingredients: 'Ветчина, ананасы, сыр моцарелла, томатный соус',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
	{
		id: 5,
		name: 'Пицца Четыре сыра',
		price: 800,
		ingredients: 'Моцарелла, пармезан, голубой сыр, рикотта, томатный соус',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
	{
		id: 6,
		name: 'Пицца с морепродуктами',
		price: 900,
		ingredients: 'Креветки, кальмары, мидии, сыр моцарелла, томатный соус',
		imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
	},
];

export const ProductList: FC = () => {
	return (
		<div className={styles.wrapper}>
			{products.map((product) => (
				<ProductCard key={product.id} id={product.id} name={product.name} price={product.price} ingredients={product.ingredients} imageUrl={product.imageUrl} />
			))}
		</div>
	);
};
