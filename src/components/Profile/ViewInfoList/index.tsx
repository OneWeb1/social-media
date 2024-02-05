import { CSSProperties, FC } from 'react';

import styles from './ViewInfoList.module.scss';
import ViewHeader from '../../mini/ViewHeader';

interface ViewInfoListProps {
	style?: CSSProperties;
}

const ViewInfoList: FC<ViewInfoListProps> = ({ style }) => {
	return (
		<div style={style} className={styles.viewInfoList}>
			<div className={styles.viewRow}>
				<ViewHeader>Groups</ViewHeader>
				<div className={styles.rowItem}>
					<img src='./assets/profile/group-people.png' alt='group' />
					<div className={styles.rowText}>UI/UX Design</div>
				</div>
				<div className={styles.rowItem}>
					<img src='./assets/profile/group-people.png' alt='group' />
					<div className={styles.rowText}>UI Design</div>
				</div>
				<div className={styles.rowItem}>
					<img src='./assets/profile/group-people.png' alt='group' />
					<div className={styles.rowText}>UI Design</div>
				</div>
			</div>
			<div className={styles.viewRow}>
				<ViewHeader>Event</ViewHeader>
				<div className={styles.rowItem}>
					<img src='./assets/profile/calendar.png' alt='group' />
					<div className={styles.rowText}>Webinar UI Design at 09:00 am.</div>
				</div>
			</div>
			<div className={styles.viewRow}>
				<ViewHeader>Followed Hastag</ViewHeader>
				<div className={styles.hashtagRow}>
					<div className={styles.hashtagItem}>#UIDesign</div>
					<div className={styles.hashtagItem}>#UIUXDesign</div>
					<div className={styles.hashtagItem}>#UIRemote</div>
				</div>
				<div className={styles.hashtagRow}>
					<div className={styles.hashtagItem}>#wfh</div>
					<div className={styles.hashtagItem}>#RemoteWork</div>
					<div className={styles.hashtagItem}>#UXDesign</div>
				</div>
				<div className={styles.hashtagRow}>
					<div className={styles.hashtagItem}>#jobsUIDesign</div>
					<div className={styles.hashtagItem}>#Userexperince</div>
				</div>
			</div>
		</div>
	);
};

export default ViewInfoList;
