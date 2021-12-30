import Image from 'next/image';

import style from '@modules/card';

import logo013 from '@images/013.svg';
import coffeeIcon from '@icons/coffee.svg';
import info from '@content/info.json';

import Socials from '@components/Socials';

const Card = () => {
	return (
		<div className={style.card}>
			<div className={style.main}>
				<figure className={style.logo}>
					<Image
						src={logo013}
						width={130}
						height={90}
						alt='The Guz013 universal logo/symbol | 013 symbol'
					/>
					<h1>Guz013</h1>
				</figure>
				<p className={style.quote}>Someone who&apos;s trying to improve</p>
				<Socials />
				<button className={style.support}>
					<a href={info.support.url} target='_blank' rel='noreferrer'>
						<Image src={coffeeIcon} alt='Coffee Icon' />
						/support
					</a>
				</button>
			</div>
		</div>
	);
};

export default Card;
