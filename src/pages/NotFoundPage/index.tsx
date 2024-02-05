import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFoundPage: FC = () => {
	return (
		<div className={styles.viewNotFound}>
			<div className={styles.viewWrapper}>
				<h1>The page is currently down</h1>
				<Link to='/profile'>
					<div className={styles.navLink}>Profile</div>
				</Link>
				<Link to='/'>
					<div className={styles.navLink}>Home</div>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
