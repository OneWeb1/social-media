import { FC } from 'react';

import styles from './ViewMessage.module.scss';

const ViewMessage: FC = () => {
	return (
		<div className={styles.viewMessage}>
			<div className={styles.viewItem}>
				<div className={styles.icon}>
					<img src='./public/assets/profile/message.png' alt='message' />
				</div>
				<div className={styles.text}>Message</div>
			</div>
		</div>
	);
};

export default ViewMessage;
