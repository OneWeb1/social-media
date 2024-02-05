import { FC } from 'react';

import styles from './ViewOther.module.scss';
import OtherItem from './OtherItem';

const ViewOther: FC = () => {
	return (
		<div className={styles.viewOther}>
			<div className={styles.viewHeader}>
				<div className={styles.logo}>
					<img src='./public/assets/profile/other-logo.png' alt='logo' />
				</div>
				<div className={styles.text}>LinkedIn Corporation © 2021</div>
			</div>
			<div className={styles.otherWrapper}>
				<div className={styles.leftColumn}>
					<OtherItem value='About' />
					<OtherItem value='Accesibility' />
					<OtherItem value='Help Center' />
					<OtherItem value='Privacy & Terms  ' />
				</div>
				<div className={styles.rightColumn}>
					<OtherItem value='Advertising ' />
					<OtherItem value='Business Services' />
					<OtherItem value='Download Apps' />
					<OtherItem value='Services' />
				</div>
			</div>
		</div>
	);
};

export default ViewOther;
