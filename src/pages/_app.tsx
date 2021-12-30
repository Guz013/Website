import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import Footer from '@components/Footer';
import Background from '@components/Background';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
			<Background />
		</>
	);
}

export default MyApp;
