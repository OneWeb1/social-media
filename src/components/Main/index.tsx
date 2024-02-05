import { FC } from 'react';

import ViewProfile from '../Profile/ViewProfile';
import ViewInfoList from '../Profile/ViewInfoList';
import ViewFollowers from '../Profile/ViewFollowers';
import ViewPopular from '../Profile/ViewPopular';
import ViewOther from '../Profile/ViewOther';
import ViewMessage from '../Profile/ViewMessage';
import ReelsTape from '../ReelsTape';
import ViewAddPost from '../ViewAddPost';
import ViewPost from '../ViewPost';

import { posts } from './postsData';

import styles from './Main.module.scss';

const Main: FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.leftSide}>
				<ViewProfile />
				<ViewInfoList />
			</div>
			<div className={styles.mainSide}>
				<ReelsTape />
				<ViewAddPost />
				{posts.map(post => (
					<ViewPost post={post} />
				))}
			</div>
			<div className={styles.rightSide}>
				<ViewFollowers />
				<ViewPopular />
				<ViewOther />
				<ViewMessage />
			</div>
		</div>
	);
};

export default Main;
