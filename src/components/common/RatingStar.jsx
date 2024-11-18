import styles from './RatingStar.module.scss';

export default ({ maxLength = 5, ratingAvg = 0, size = 'size1' }) => {
	const avg = ratingAvg.toPrecision(3);
	const integer = Math.trunc(avg);
	const remainder = String(avg).split('.')[1];
	const style = {
			width: `${16 * maxLength}px`,
	};
	return (
		<ul
				className={styles.container}
				style={style}
		>
			{
				Array
					.from({ length: maxLength }, (_, i) => i + 1)
					.map(i => {
						return i === (integer + 1)
							? 
							<li key={i} className={[styles.star, styles[size]].join(' ')}>
								<div className={styles.targetStartContainer} style={{ width: `${remainder}%` }}>
										<span className={`${styles.star} ${styles[size]} ${styles.starRed} ${styles.targetStart}`} />
								</div>
							</li>
							: <li key={i}
									className={`${styles.star} ${styles[size]} ${i <= integer ? styles.starRed : ''}`}
							/>;
						})
			}
		</ul>
	);
};