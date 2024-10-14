import { FC } from 'react';

type Props = {
	text: string;
	fontSize?: string;
	fontWeight?: string;
	marginBottom?: string;
};

export const Title: FC<Props> = ({ text, fontSize = 35, fontWeight = 900, marginBottom }) => {
	return <h1 style={{ fontSize, fontWeight, marginBottom }}>{text}</h1>;
};
