import Image from 'next/image';

const size: number = 20;

/*
	TODO: Import dynamically the icons, based on the socials.json file to get the paths or file names.
*/

const SocialIcon = (props: any) => {
	switch (props.name) {
		case 'twitter':
			return (
				<Image src={twitterIcon} alt='Twitter' width={size} height={size} />
			);

		case 'instagram':
			return (
				<Image src={instagramIcon} alt='Instagram' width={size} height={size} />
			);

		case 'github':
			return <Image src={githubIcon} alt='GitHub' width={size} height={size} />;

		case 'odysee':
			return <Image src={odyseeIcon} alt='Odysee' width={size} height={size} />;

		case 'youtube':
			return (
				<Image src={youtubeIcon} alt='YouTube' width={size} height={size} />
			);

		case 'mastodon':
			return (
				<Image src={mastodonIcon} alt='Mastodon' width={size} height={size} />
			);

		case 'pixelfed':
			return (
				<Image src={pixelfedIcon} alt='Pixelfed' width={size} height={size} />
			);

		default:
			return (
				<Image
					src={error}
					alt='Error loading image'
					width={size}
					height={size}
				/>
			);
	}
};

import twitterIcon from '@icons/twitter.svg';
import instagramIcon from '@icons/instagram.svg';
import githubIcon from '@icons/github.svg';
import odyseeIcon from '@icons/odysee.svg';
import youtubeIcon from '@icons/youtube.svg';
import mastodonIcon from '@icons/mastodon.svg';
import pixelfedIcon from '@icons/pixelfed.svg';

import error from '@icons/error.svg';

export default SocialIcon;
