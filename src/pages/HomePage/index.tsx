import { FC, useState } from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';

import styles from './HomePage.module.scss';
import RightSidebar from '../../components/RightSidebar';

const HomePage: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isIndex, setIsIndex] = useState<boolean>(false);

	return (
		<>
			<Header setIsIndex={setIsIndex} setIsOpenSidebar={setIsOpen} />
			<div className={styles.container}>
				<Main />
			</div>

			<RightSidebar
				isIndex={isIndex}
				isOpen={isOpen}
				setIsIndex={setIsIndex}
				setIsOpen={setIsOpen}
			/>
		</>
	);
};

export default HomePage;
