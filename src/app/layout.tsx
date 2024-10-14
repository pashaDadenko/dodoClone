import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Header } from '@/components/Header/Header';

import './global.scss';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'dodo clone',
	description: 'dodo clone app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
