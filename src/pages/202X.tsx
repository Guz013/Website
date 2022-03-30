import type { NextPage } from 'next';
import Head from 'next/head';

import style from '@modules/pages/202X';

const Page: NextPage = () => {
	return (
		<>
			<Head>
				<title>202X</title>
			</Head>
			<main className={style.main}>
				<div>
					<p className={`${style.glitch} ${style.date}`}>
						XX/XX/<span className={style.year}></span>
					</p>
					<p className={`${style.glitch} ${style.quote}`}>
						Sometimes, is better just wait
					</p>
					<p className={style.coming}>coming soon</p>
				</div>
			</main>
		</>
	);
};

export default Page;
