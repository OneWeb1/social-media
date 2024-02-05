import { FC } from 'react';

import styles from './OtherItem.module.scss';

interface OtherItemProps {
	value: string;
}

const OtherItem: FC<OtherItemProps> = ({ value }) => {
	return (
		<div className={styles.viewItem}>
			<div className={styles.icon}>
				<img src='./public/assets/profile/other.png' alt='other' />
			</div>
			<div className={styles.text}>{value}</div>
		</div>
	);
};

export default OtherItem;
