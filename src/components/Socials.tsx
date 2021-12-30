import style from '@modules/socials';

import socials from '@content/socials.json';

import SocialIcon from '@components/SocialIcon';

const Socials = () => {
	return (
		<ul className={style.icons}>
			{socials.map((s) => {
				return (
					<li key={s.name}>
						<a href={s.url} rel='noreferrer' target='_blank'>
							<SocialIcon name={s.name.toLowerCase()} />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Socials;
