import { FC } from 'react';

import styles from './PopularItem.module.scss';

interface PopularItemProps {
	title: string;
	description: string;
	count: number;
}

const PopularItem: FC<PopularItemProps> = ({ title, description, count }) => {
	return (
		<div className={styles.viewPopularItem}>
			<div className={styles.leftSide}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>

			<div className={styles.viewEye}>
				<div>
					<div className={styles.icon}>
						<img src='./public/assets/profile/eye.png' alt='eye' />
					</div>
					<div className={styles.count}>{count}+</div>
				</div>
			</div>
		</div>
	);
};

export default PopularItem;
