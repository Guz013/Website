import type { NextPage } from 'next';

import style from '@modules/pages/index';

import Card from '@components/Card';
/*
	TODO: Make more pages, like about, contact, etc. and create a dynamic nav bar.
	import Nav from '@components/Nav';
*/

const Index: NextPage = () => {
	return (
		<main className={style.body}>
			<header className={style.card}>
				<Card />
			</header>
			{/* <Nav/> */}
		</main>
	);
};

export default Index;
