import { FC } from 'react';
import Image from 'next/image';

import styles from './LeftBlock.module.scss';

export const LeftBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Image src={'/logo.svg'} alt={'logo'} width={40} height={40} />

			<div>
				<p className={styles.companyName}>DODO CLONE</p>
				<p className={styles.slogan}>вкусней уже некуда</p>
			</div>
		</div>
	);
};
