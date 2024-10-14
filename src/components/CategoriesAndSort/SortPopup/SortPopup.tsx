import { FC } from 'react';
import { ArrowUpDown } from 'lucide-react';

import styles from './SortPopup.module.scss';

export const SortPopup: FC = () => {
	return (
		<div className={styles.wrapper}>
			<ArrowUpDown size={16} />
			<b>Сортировка:</b>
			<b className={styles.textPrimary}>популярное</b>
		</div>
	);
};
