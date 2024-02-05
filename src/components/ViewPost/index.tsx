import { FC } from 'react';

import styles from './ViewPost.module.scss';

interface IViewPost {
	name: string;
	description: string;
	date: string;
	message: string;
	avatarId: number;
	imageId: number;
	isFollow: boolean;
}

interface ViewPostProps {
	post: IViewPost;
}

const ViewPost: FC<ViewPostProps> = ({ post }) => {
	return (
		<div className={styles.viewPost}>
			<div className={styles.userInfo}>
				<div className={styles.leftSide}>
					<div className={styles.avatar}>
						<img
							src={`./public/assets/tape/avatars/avatar${post.avatarId}.png`}
							alt='avatar'
						/>
					</div>
					<div className={styles.columnInfo}>
						<div className={styles.username}>{post.name}</div>
						<div className={styles.description}>{post.description}</div>
						<div className={styles.viewBox}>
							<div className={styles.date}>{post.date}</div>
							{!post.isFollow && (
								<div className={styles.viewFollow}>
									<img
										src='./public/assets/tape/plus-circle.png'
										alt='plus-circle'
									/>
									<span className={styles.follow}>Follow</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={styles.settings}>
					<img src='./public/assets/tape/settings.png' alt='settings' />

					<div className={styles.menu}>
						<div className={styles.item}>Duplicate</div>
						<div className={styles.item}>Replace</div>
						<div className={styles.item}>Shared</div>
						<div className={styles.item}>Edit</div>
						<div className={styles.item}>Remove</div>
					</div>
				</div>
			</div>
			<div className={styles.message}>{post.message}</div>
			<div className={styles.text}>See translate</div>
			<div className={styles.image}>
				<img
					src={`./public/assets/tape/post-assets/image${post.imageId}.png`}
					alt='image'
				/>
			</div>
			<div className={styles.functions}>
				<div className={styles.functionItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/functions/like.png' alt='like' />
					</div>
					{/* <div className={styles.value}>Like</div> */}
					<div className={styles.count}>0</div>
				</div>
				<div className={styles.functionItem}>
					<div className={styles.icon}>
						<img
							src='./public/assets/tape/functions/comment.png'
							alt='comment'
						/>
					</div>
					{/* <div className={styles.value}>Comments</div> */}
					<div className={styles.count}>0</div>
				</div>
				<div className={styles.functionItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/functions/save.png' alt='save' />
					</div>
					{/* <div className={styles.value}>Saved</div> */}
					<div className={styles.count}>0</div>
				</div>
				<div className={styles.functionItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/functions/send.png' alt='send' />
					</div>
					{/* <div className={styles.value}>Send</div> */}
					<div className={styles.count}>0</div>
				</div>
				<div className={styles.functionItem}>
					<div className={styles.icon}>
						<img src='./public/assets/tape/functions/share.png' alt='share' />
					</div>
					{/* <div className={styles.value}>Share</div> */}
					<div className={styles.count}>0</div>
				</div>
			</div>
			<div className={styles.viewAddComment}>
				<img src='./public/assets/avatar.png' alt='avatar' />
				<div className={styles.viewInput}>
					<input type='text' placeholder='Add comment...' />
					<div className={styles.rightSide}>
						<div className={styles.galleryIcon}>
							<img src='./public/assets/tape/gallery.png' alt='gallery' />
						</div>
						<div className={styles.sendIcon}>
							<img src='./public/assets/tape/functions/send.png' alt='send' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewPost;
