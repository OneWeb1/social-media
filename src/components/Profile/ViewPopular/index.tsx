import { FC } from 'react';

import styles from './ViewPopular.module.scss';
import ViewHeader from '../../mini/ViewHeader';
import PopularItem from './PopularItem';

const ViewPopular: FC = () => {
	return (
		<div className={styles.viewPopular}>
			<ViewHeader className={styles.container}>Courses Popular</ViewHeader>
			<div className={styles.viewPopularItems}>
				<PopularItem
					title='Learning UX Design - Mobile apps'
					description='Thomas Wick'
					count={50}
				/>
				<PopularItem
					title='How to Be UI Design'
					description='Alan UI Design'
					count={150}
				/>
				<PopularItem
					title='How to Be Develover Golang'
					description='Rubicode '
					count={50}
				/>
				<PopularItem
					title='Tips and Trick Freelance'
					description='Purwanstudio'
					count={520}
				/>
			</div>
		</div>
	);
};

export default ViewPopular;
