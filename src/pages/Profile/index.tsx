import { FC } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';
import ViewProfile from '../../components/Profile/ViewProfile';

const Profile: FC = () => {
	return (
		<div className={styles.viewProfile}>
			<div className={styles.header}>
				<div className={styles.leftSide}>
					<Link to='/'>
						<div className={styles.back}>
							<IoArrowBackOutline style={{ fontSize: '20px' }} />
						</div>
					</Link>
					Profile
				</div>
			</div>
			<ViewProfile style={{ margin: '50px auto' }} />
		</div>
	);
};

export default Profile;
