import { CSSProperties, FC } from 'react';

import styles from './ViewProfile.module.scss';

interface ViewProfileProps {
	style?: CSSProperties;
}

const ViewProfile: FC<ViewProfileProps> = ({ style }) => {
	return (
		<div style={style} className={styles.viewProfile}>
			<div className={styles.forground}>
				<img src='./assets/head.png' alt='head' />
			</div>

			<div className={styles.avatarWrapper}>
				<div className={styles.avatarBox}>
					<div className={styles.avatar}>
						<img src='./assets/avatar.png' alt='avatar' />
					</div>
				</div>
				<div className={styles.username}>Vladyslav Kovalevych</div>
			</div>
			<div className={styles.bottomView}>
				<div className={styles.subtitle}>
					I have experince 1 year UI/UX Design
				</div>
				<div className={styles.rowInfo}>
					<div className={styles.columnLeft}>
						<div className={styles.topItem}>Profile Views</div>
						<div className={styles.bottomItem}>16+</div>
					</div>
					<div className={styles.columnRight}>
						<div className={styles.topItem}>Profile Post</div>
						<div className={styles.bottomItem}>400+</div>
					</div>
				</div>
				<div className={styles.bottomRow}>
					<div className={styles.leftItem}>
						<div className={styles.icon}>
							<img src='./assets/profile/save.png' alt='save' />
						</div>
						<div className={styles.value}>Saved</div>
					</div>
					<div className={styles.rightItem}>
						<div className={styles.icon}>
							<img src='./assets/profile/premium.png' alt='premium' />
						</div>
						<div className={styles.value}>Premium</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewProfile;
