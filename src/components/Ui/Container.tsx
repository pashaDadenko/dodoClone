import { CSSProperties, FC } from 'react';

type Props = {
	children: React.ReactNode;
	style?: CSSProperties;
	maxWidth?: string;
	padding?: string;
	margin?: string;
};

export const Container: FC<Props> = ({ style, maxWidth = '1250px', padding = '20px 0', margin = '0 auto', children }) => {
	return <div style={{ maxWidth, padding, margin, ...style }}>{children}</div>;
};
