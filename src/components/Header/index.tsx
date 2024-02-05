import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';

import { HiOutlineMenu } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface HeaderProps {
	setIsIndex: Dispatch<SetStateAction<boolean>>;
	setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setIsIndex, setIsOpenSidebar }) => {
	const [top] = useState<string>('0px');
	const [update, setUpdate] = useState<number>(1);

	const showSidebar = () => {
		setIsIndex(true);
		setIsOpenSidebar(true);
	};

	useEffect(() => {
		// let prevScrollPos = window.scrollY;

		window.onresize = function () {
			setUpdate(prev => prev + 1);
		};

		// window.onscroll = function () {
		// 	const currentScrollPos = window.scrollY;

		// 	if (prevScrollPos > currentScrollPos) {
		// 		setTop('0px');
		// 	} else {
		// 		setTop('-90px');
		// 	}

		// 	prevScrollPos = currentScrollPos;
		// };
	}, []);

	return (
		<div style={{ top: top }} className={styles.header}>
			<div className={styles.leftSide}>
				{window.innerWidth >= 1000 && (
					<Link to='/'>
						<div className={styles.logo}>
							<img src='./public/assets/logo.png' alt='logo' />
						</div>
					</Link>
				)}

				{update && window.innerWidth < 1000 && (
					<Link to='/'>
						<div className={styles.logo}>
							<img
								style={{
									minWidth: '150px',
									height: '60px',
									marginTop: '-7px',
								}}
								src='./public/assets/mobile-logo.png'
								alt='logo'
							/>
						</div>
					</Link>
				)}

				<div className={styles.searchWrapper}>
					<div className={styles.icon}>
						<img src='./public/assets/search.png' alt='search' />
					</div>
					<input type='text' placeholder='Search...' />
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.leftSide}>
					<Link to='/'>
						<div className={styles.navBox}>
							<img
								src='./public/assets/header-nav-icons/home.png'
								alt='nav-icon'
							/>
						</div>
					</Link>
					<Link to='/people'>
						<div className={styles.navBox}>
							<img
								src='./public/assets/header-nav-icons/people.png'
								alt='nav-icon'
							/>
						</div>
					</Link>
					<Link to='/shop'>
						<div className={styles.navBox}>
							<img
								src='./public/assets/header-nav-icons/shop.png'
								alt='nav-icon'
							/>
						</div>
					</Link>
					<Link to='/chat'>
						<div className={styles.navBox}>
							<img
								src='./public/assets/header-nav-icons/chat.png'
								alt='nav-icon'
							/>
						</div>
					</Link>
					<Link to='/notification'>
						<div className={styles.navBox}>
							<img
								src='./public/assets/header-nav-icons/notification.png'
								alt='nav-icon'
							/>
						</div>
					</Link>
				</div>
				<div className={styles.profileWrapper}>
					<div className={styles.leftSide}>
						<div className={styles.avatar}>
							<img src='./public/assets/avatar.png' alt='avatar' />
						</div>
						<div className={styles.userName}>Vladyslav Kovalevich</div>
					</div>
					<div className={styles.dropDown}>
						<img src='./public/assets/arrow-down.png' alt='arrow' />
					</div>

					<div className={styles.menu}>
						<Link to='/profile'>
							<div className={styles.item}>Profile</div>
						</Link>
						<Link to='/love'>
							<div className={styles.item}>Love</div>
						</Link>
						<Link to='/list_message'>
							<div className={styles.item}>List messages</div>
						</Link>
						<Link to='/settings'>
							<div className={styles.item}>Settings</div>
						</Link>
						<Link to='/logout'>
							<div className={styles.item}>Logout</div>
						</Link>
					</div>
				</div>
			</div>
			<div className={`${styles.burger}`} onClick={showSidebar}>
				<HiOutlineMenu style={{ fontSize: '25px' }} />
			</div>
		</div>
	);
};

export default Header;
