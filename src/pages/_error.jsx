import Link from 'next/link';

import style from '@modules/error';

const Error = ({ statusCode }) => {
	return (
		<main className={style.body}>
			<header>
				<div className={style.card}>
					<div className={style.main}>
						<figure className={style.logo}>
							<h1>Error</h1>
						</figure>

						<p className={style.quote}>
							{statusCode
								? `<An error ${statusCode} occurred on the server/>`
								: '<An error occurred on client/>'}
						</p>

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

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
