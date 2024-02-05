import { FC, ReactNode } from 'react';

import styles from './ViewHeader.module.scss';

interface ViewHeaderProps {
	children: ReactNode;
	className?: string;
}

const ViewHeader: FC<ViewHeaderProps> = ({ children, className }) => {
	return (
		<div className={`${styles.viewHeader} ${className}`}>
			<div className={styles.title}>{children}</div>
			<div className={styles.icon}>
				<img src='./public/assets/arrow-down.png' alt='arrow' />
			</div>
		</div>
	);
};

export default ViewHeader;
