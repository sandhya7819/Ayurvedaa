import Link from 'next/link';
import styles from './Header.module.css';
import { Search, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🌿</span>
                    <span className={styles.logoText}>Ayurveda Guide</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/herbs" className={styles.navLink}>Herbs</Link></li>
                        <li><Link href="/health-conditions" className={styles.navLink}>Conditions</Link></li>
                        <li><Link href="/medicines" className={styles.navLink}>Medicines</Link></li>
                        <li><Link href="/products" className={styles.navLink}>Products</Link></li>
                        <li><Link href="/doctors" className={styles.navLink}>Doctors</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.searchBtn} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <Link href="/consult" className="btn btn-primary">
                        Consult Doctor
                    </Link>
                    <button className={styles.mobileMenuBtn} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
