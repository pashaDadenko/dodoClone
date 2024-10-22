import { FC } from 'react';

type Props = {
	text: string;
	fontSize?: string;
	fontWeight?: string;
	margin?: string;
};

export const Title: FC<Props> = ({ text, fontSize = 35, fontWeight = 900, margin }) => {
	return <h1 style={{ fontSize, fontWeight, margin }}>{text}</h1>;
};
