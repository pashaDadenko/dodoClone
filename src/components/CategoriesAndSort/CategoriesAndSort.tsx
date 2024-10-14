import { FC } from 'react';
import { Container } from '../Ui/Container';
import { SortPopup } from './SortPopup/SortPopup';
import { Categories } from './Categories/Categories';

import styles from './CategoriesAndSort.module.scss';

export const CategoriesAndSort: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
};
