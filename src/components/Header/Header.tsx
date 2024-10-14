import { FC } from 'react';
import { Container } from '../Ui/Container';
import { LeftBlock } from './LeftBlock/LeftBlock';
import { RightBlock } from './RightBlock/RightBlock';

import styles from './Header.module.scss';

export const Header: FC = () => {
	return (
		<Container>
			<header className={styles.wrapper}>
				<LeftBlock />
				<RightBlock />
			</header>
		</Container>
	);
};
