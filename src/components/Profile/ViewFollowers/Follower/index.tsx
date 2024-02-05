import { FC } from 'react';

import styles from './Follower.module.scss';

interface FollowerProps {
	avatarId: number;
	name: string;
	subtitle: string;
}

const Follower: FC<FollowerProps> = ({ name, subtitle, avatarId }) => {
	return (
		<div className={styles.viewFollower}>
			<div className={styles.leftSide}>
				<div className={styles.avatar}>
					<img
						src={`./public/assets/profile/follow/avatar${avatarId}.png`}
						alt='avatar'
					/>
				</div>
				<div className={styles.viewUserInfo}>
					<div className={styles.username}>{name}</div>
					<div className={styles.subtitle}>{subtitle}</div>
				</div>
			</div>
			<div className={styles.buttonAdd}>
				<img src='./public/assets/profile/plus-circle.png' alt='plus-circle' />
			</div>
		</div>
	);
};

export default Follower;
