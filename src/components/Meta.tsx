import socials from '@content/socials.json';
import info from '@content/info.json';

const commons = {
	title: 'Guz013 - Someone who\'s trying to improve.',
	description: 'Personal website of Guz013, where to find social medias and professional contact.',
	image: 'https://pbs.twimg.com/profile_images/1477086304856911879/H0Vx9YxM_400x400.jpg',
};

function Meta() {
	return (
		<>
			<meta name='description' content={commons.description}/>
			<meta name='author' content={info.name}/>

			{/* Schema.org markup */}
			<meta itemProp='name' content={commons.title}/>
			<meta itemProp='description' content={commons.description}/>
			<meta itemProp='image' content={commons.image}/>

			{/* Twitter Card: */}
			<meta name='twitter:card' content='summary'/>
			<meta name='twitter:site' content={`@${socials.find(i => { return i.name === 'twitter'; })?.username}`}/>
			<meta name='twitter:title' content={commons.title}/>
			<meta name='twitter:description' content={commons.description}/>
			<meta name='twitter:image:src' content={commons.image}/>

			{/* Open Graph */}
			<meta property='og:type' content='website'/>
			<meta property='og:title' content={commons.title}/>
			<meta property='og:description' content={commons.description}/>
			<meta property='og:url' content='https://guz.vercel.app'/>
			<meta property='og:site_name' content={'Guz\'s Website'}/>
			<meta property='og:image' content={commons.image}/>
		</>
	);
}

export default Meta;