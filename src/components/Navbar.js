import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/src/images/evgLogo.jpg";
import navStyles from "@/src/styles/Navbar.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className={`${navStyles.navContainer}`}>
			<div className={navStyles.navWrapper}>
				<div
					className={`${navStyles.navLogoWrapper}`}
					style={{ position: "relative", width: "5rem", height: "5rem" }}
				>
					<Image
						src={logo}
						alt="EVG Logo"
						fill
						className={`${navStyles.navLogo}`}
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div
					className={`${navStyles.navHamburgerWrapper} ${navStyles.navHidden} ${
						navbarOpen ? navStyles.iconClose : navStyles.iconOpen
					}`}
					onClick={handleToggle}
				>
					{navbarOpen ? (
						<MdClose
							style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
						/>
					) : (
						<FiMenu
							style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
						/>
					)}
				</div>
				<ul
					className={`${navStyles.navCenterWrapper} ${
						navbarOpen ? navStyles.showMenu : navStyles.hideMenu
					}`}
				>
					<li className={`${navStyles.navItem}`}>
						<Link href="/" onClick={() => closeMenu()}>
							Home
						</Link>
					</li>
					<li className={`${navStyles.navItem}`}>
						<Link href="/about" onClick={() => closeMenu()}>
							About
						</Link>
					</li>
					<li className={`${navStyles.navItem}`}>
						<Link href="/valuation-projects" onClick={() => closeMenu()}>
							Valuation Projects
						</Link>
					</li>
					<li className={`${navStyles.navItem}`}>
						<Link href="/process-and-fees" onClick={() => closeMenu()}>
							Process and Fees
						</Link>
					</li>
				</ul>
				<div className={`${navStyles.navItem} ${navStyles.navButtonWrapper}`}>
					<Link href="/contact" onClick={() => closeMenu()}>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
