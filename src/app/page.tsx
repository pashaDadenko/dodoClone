import { Title } from '@/components/Ui/Title';
import { Container } from '@/components/Ui/Container';
import { ProductList } from '@/components/ProductList/ProductList';
import { FilterPanel } from '@/components/FilterPanel/FilterPanel';
import { CategoriesAndSort } from '@/components/CategoriesAndSort/CategoriesAndSort';

export default function Home() {
	return (
		<>
			<Container>
				<Title text='Все пиццы' />
			</Container>

			<CategoriesAndSort />

			<Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
				<FilterPanel />
				<ProductList />
			</Container>
		</>
	);
}
