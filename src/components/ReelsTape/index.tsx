import { FC } from 'react';

import styles from './ReelsTape.module.scss';

const reelsUsers = [
	{ name: 'Shane', avatarId: 1 },
	{ name: 'Randall', avatarId: 2 },
	{ name: 'Leslie', avatarId: 3 },
	{ name: 'Marvin', avatarId: 4 },
	{ name: 'Vlad', avatarId: 5 },
	{ name: 'Dwight', avatarId: 6 },
	{ name: 'Wendy', avatarId: 7 },
	{ name: 'Philip', avatarId: 8 },
	{ name: 'Judith', avatarId: 9 },
	{ name: 'Shane', avatarId: 1 },
	{ name: 'Shane', avatarId: 1 },
	{ name: 'Randall', avatarId: 2 },
	{ name: 'Leslie', avatarId: 3 },
	{ name: 'Marvin', avatarId: 4 },
	{ name: 'Vlad', avatarId: 5 },
	{ name: 'Dwight', avatarId: 6 },
	{ name: 'Wendy', avatarId: 7 },
	{ name: 'Philip', avatarId: 8 },
	{ name: 'Judith', avatarId: 9 },
	{ name: 'Shane', avatarId: 1 },
];

const ReelsTape: FC = () => {
	return (
		<div className={styles.viewReelsTape}>
			<div className={styles.icon}>
				<img src='./assets/arrow-down.png' alt='arrow' />
			</div>
			<div className={styles.viewReels}>
				{reelsUsers.map(user => (
					<div className={styles.viewUser}>
						<div className={styles.avatar}>
							<img
								src={`./assets/tape/reels/avatar${user.avatarId}.png`}
								alt='avatar'
							/>
						</div>
						<div className={styles.username}>{user.name}</div>
					</div>
				))}
			</div>
			<div className={styles.icon}>
				<img src='./assets/arrow-down.png' alt='arrow' />
			</div>
		</div>
	);
};

export default ReelsTape;
