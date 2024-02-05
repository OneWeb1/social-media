import { FC } from 'react';

import styles from './ViewAndPost.module.scss';

const ViewAddPost: FC = () => {
	return (
		<div className={styles.viewAddPost}>
			<div className={styles.topSide}>
				<div className={styles.avatar}>
					<img src='./public/assets/avatar.png' alt='avatar' />
				</div>
				<input type='text' placeholder='Add new post' />
			</div>
			<div className={styles.bottomSide}>
				<div className={styles.featureItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/feature/photo.png' alt='photo' />
					</div>
					<div className={styles.text}>Photo</div>
				</div>
				<div className={styles.featureItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/feature/video.png' alt='video' />
					</div>
					<div className={styles.text}>Vidieos</div>
				</div>
				<div className={styles.featureItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/feature/working.png' alt='working' />
					</div>
					<div className={styles.text}>Working</div>
				</div>
				<div className={styles.featureItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/feature/article.png' alt='article' />
					</div>
					<div className={styles.text}>Create Article</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAddPost;
