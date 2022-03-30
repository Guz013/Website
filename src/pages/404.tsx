import Link from 'next/link';

import style from '@modules/pages/error';

const Card = () => {
	return (
		<main className={style.body}>
			<header>
				<div className={style.card}>
					<div className={style.main}>
						<figure className={style.logo}>
							<h1>404</h1>
						</figure>

						<p className={style.quote}>{'<Page not founded/>'}</p>

						<button className={style.support}>
							<Link href='/'>
								<a>/index</a>
							</Link>
						</button>
					</div>
				</div>
			</header>
		</main>
	);
};

export default Card;
