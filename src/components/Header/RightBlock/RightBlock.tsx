import { FC } from 'react';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

import styles from './RightBlock.module.scss';

export const RightBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.buttonUser}>
				<User size={16} />
				Войти
			</button>

			<button className={styles.buttonCart}>
				<b>520 ₽</b>
				<span className={styles.line}></span>
				<div className={styles.content}>
					<div className={styles.box}>
						<ShoppingCart size={16} />
						<b>3</b>
					</div>
					<ArrowRight className={styles.arrow} size={16} />
				</div>
			</button>
		</div>
	);
};
