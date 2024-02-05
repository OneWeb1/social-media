import { FC } from 'react';
import styles from './Profile.module.scss';
import ViewProfile from '../../components/Profile/ViewProfile';

const Profile: FC = () => {
	return (
		<div className={styles.viewProfile}>
			<ViewProfile style={{ margin: '50px auto' }} />
		</div>
	);
};

export default Profile;
