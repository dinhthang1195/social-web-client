import styles from "../Header/header.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.leftHandSide}>
					<div className={styles.headerIcon}>
						<a>
							<i className="fa-brands fa-staylinked" style={{ color: "#921c1c" }}></i>
						</a>
					</div>
					<div className={styles.headerSearch}>
						<div className={styles.searchWrapper}>
							<div className={styles.searchIcon}>
								<i className="fa-solid fa-magnifying-glass"></i>
							</div>
							<div className={styles.searchInput}>
								<input type="text" placeholder="Search" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.headerNavigate}>nav</div>
				<div className={styles.headerOptional}>optional</div>
			</div>
		</header>
	);
}

export default Header;
