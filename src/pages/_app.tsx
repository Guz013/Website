import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Footer from '@components/Footer';
import Background from '@components/Background';
import Meta from '@components/Meta';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Guz</title>
				<Meta />
			</Head>
			<Component {...pageProps} />
			<Footer />
			<Background />
		</>
	);
}

export default MyApp;
