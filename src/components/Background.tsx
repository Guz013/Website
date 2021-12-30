import style from '@modules/background';

// ! Probably there's a better way to do this.

const Background = () => {
	return (
		<div className={style.main}>
			<div className={style.squares}>
				<span className={style.square1}></span>
				<span className={style.square2}></span>
				<span className={style.square3}></span>
				<span className={style.square4}></span>
				<span className={style.square5}></span>
				<span className={style.square6}></span>
			</div>
		</div>
	);
};

export default Background;
