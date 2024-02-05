import { FC } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';
import ViewProfile from '../../components/Profile/ViewProfile';
import ViewInfoList from '../../components/Profile/ViewInfoList';

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
				<div className={styles.settings}>
					<BiDotsVerticalRounded style={{ fontSize: '20px' }} />

					{/* <div className={styles.menu}>
						<div className={styles.item}>Item</div>
						<div className={styles.item}>Item</div>
						<div className={styles.item}>Item</div>
						<div className={styles.item}>Item</div>
						<div className={styles.item}>Item</div>
					</div> */}
				</div>
			</div>
			<ViewProfile style={{ margin: '70px auto' }} />
			<ViewInfoList style={{ margin: '-50px auto' }} />
		</div>
	);
};

export default Profile;
