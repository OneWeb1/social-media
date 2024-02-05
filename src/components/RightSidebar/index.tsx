import { FC, useRef, MouseEvent, Dispatch, SetStateAction } from 'react';

import { MdOutlineClose } from 'react-icons/md';

import { Link } from 'react-router-dom';

import styles from './RightSidebar.module.scss';
import ViewFollowers from '../Profile/ViewFollowers';
import ViewPopular from '../Profile/ViewPopular';
import ViewOther from '../Profile/ViewOther';
import ViewMessage from '../Profile/ViewMessage';

interface RightSidebarProps {
	isIndex: boolean;
	setIsIndex: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RightSidebar: FC<RightSidebarProps> = ({
	isIndex,
	setIsIndex,
	isOpen,
	setIsOpen,
}) => {
	const sidebarRef = useRef<HTMLDivElement | null>(null);

	const hideSidebar = () => {
		setIsOpen(false);
		setTimeout(() => {
			setIsIndex(false);
		}, 500);
	};

	const hideSidebarWrapper = (e: MouseEvent) => {
		const isSidebarWrapper = e.target === sidebarRef.current;
		if (isSidebarWrapper) {
			hideSidebar();
		}
	};

	return (
		<div
			ref={sidebarRef}
			style={{ opacity: isIndex ? 1 : 0 }}
			className={`${styles.viewRightSidebarWrapper} ${
				!isIndex ? styles.dropIndex : styles.downIndex
			}`}
			onClick={hideSidebarWrapper}>
			<div
				className={`${styles.viewRightSidebar} ${
					!isOpen ? styles.showSidebar : ''
				} sidebar`}>
				<div className={styles.row}>
					<div className={styles.close} onClick={hideSidebar}>
						<MdOutlineClose />
					</div>
					<Link to='/'>
						<div className={styles.logo}>
							<img
								style={{
									minWidth: '30px',
									height: '30px',
								}}
								src='./assets/logo.png'
								alt='logo'
							/>
						</div>
					</Link>
				</div>
				<div className={styles.leftSide}>
					<Link to='/'>
						<div className={styles.flex}>
							<div className={styles.navBox}>
								<img src='./assets/header-nav-icons/home.png' alt='nav-icon' />
							</div>
							<div className={styles.linkText}>Home</div>
						</div>
					</Link>
					<Link to='/people'>
						<div className={styles.flex}>
							<div className={styles.navBox}>
								<img
									src='./assets/header-nav-icons/people.png'
									alt='nav-icon'
								/>
							</div>
							<div className={styles.linkText}>People</div>
						</div>
					</Link>
					<Link to='/shop'>
						<div className={styles.flex}>
							<div className={styles.navBox}>
								<img src='./assets/header-nav-icons/shop.png' alt='nav-icon' />
							</div>
							<div className={styles.linkText}>Shop</div>
						</div>
					</Link>
					<Link to='/chat'>
						<div className={styles.flex}>
							<div className={styles.navBox}>
								<img src='./assets/header-nav-icons/chat.png' alt='nav-icon' />
							</div>
							<div className={styles.linkText}>Chat</div>
						</div>
					</Link>
					<Link to='/notification'>
						<div className={styles.flex}>
							<div className={styles.navBox}>
								<img
									src='./assets/header-nav-icons/notification.png'
									alt='nav-icon'
								/>
							</div>
							<div className={styles.linkText}>Notification</div>
						</div>
					</Link>
					<div
						style={{ justifyContent: 'space-between' }}
						className={styles.flex}>
						<Link to='/profile'>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className={styles.navBox}>
									<img
										src='./assets/header-nav-icons/profile.png'
										alt='nav-icon'
									/>
								</div>
								<div className={styles.linkText}>Profile</div>
							</div>
						</Link>

						<div className={styles.dropdown}>
							<img src='./assets/dropdown.png' alt='nav-icon' />
						</div>
					</div>
				</div>

				<ViewFollowers />
				<ViewPopular />
				<ViewOther />
				<ViewMessage />
			</div>
		</div>
	);
};

export default RightSidebar;
