import { FC } from 'react';

import styles from './ViewFollowers.module.scss';
import ViewHeader from '../../mini/ViewHeader';
import Follower from './Follower';

const ViewFollowers: FC = () => {
	return (
		<div className={styles.viewFollowers}>
			<ViewHeader className={styles.container}>Following</ViewHeader>
			<div className={styles.followersWrapper}>
				<Follower
					name='Jhon Robert'
					subtitle='Product Designer at dsgn.id'
					avatarId={1}
				/>
				<Follower
					name='Dika'
					subtitle='UI Designer at diary.lab'
					avatarId={2}
				/>
				<Follower
					name='Josh UI'
					subtitle='UX Designer at brodsgn.uk'
					avatarId={3}
				/>
				<Follower
					name='Billy Code'
					subtitle='Web Developer at uxdsgn.us'
					avatarId={4}
				/>
			</div>
		</div>
	);
};

export default ViewFollowers;
