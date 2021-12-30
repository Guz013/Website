import Image from 'next/image';

import style from '@modules/footer';

import githubIcon from '@icons/github.svg';
import info from '@content/info.json';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<a href={`mailto:${info.contact.url}`} target='_blank' rel='noreferrer'>
				{info.contact.url}
			</a>

			<p className={style.copyright}>
				By Gustavo &quot;Guz&quot; L. de Mello • {new Date().getFullYear()}
			</p>

			<a href={info.source.repo} target='_blank' rel='noreferrer'>
				<Image src={githubIcon} alt='GitHub Icon' width={12} height={12} />
				<p>/source code</p>
			</a>
		</footer>
	);
};

export default Footer;
