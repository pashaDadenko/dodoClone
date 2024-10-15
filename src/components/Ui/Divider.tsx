import { FC } from 'react';

type Props = {
	color?: string;
	height?: string;
	margin?: string;
};

export const Divider: FC<Props> = ({ color = '#00000015', height = '1px', margin = '30px 0' }) => {
	return <div style={{ height, backgroundColor: color, margin }} />;
};
