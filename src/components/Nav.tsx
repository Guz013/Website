import Link from 'next/link';

import style from '@modules/nav';

import pages from '@content/pages.json';

const Nav = () => {
	return (
		<nav className={style.main}>
			<ul className={style.list}>
				{pages.nav.map((link) => (
					<li key={link.title} className={style.item}>
						<Link href={link.url}>
							<a>/{link.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
