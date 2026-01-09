'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();

    return (
        <div className={styles.footerWrapper}>
            {/* SEO Links Section (Light) */}
            <div className={styles.seoSection}>
                <div className={styles.seoContainer}>
                    <div className={styles.seoCategory}>
                        <span className={styles.seoTitle}>POPULAR AYURVEDIC HERBS:</span>
                        <div className={styles.seoLinks}>
                            <Link href={`/${language}/herbs/ashwagandha`}>Ashwagandha</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/tulsi`}>Tulsi</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/triphala`}>Triphala</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/shilajit`}>Shilajit</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/brahmi`}>Brahmi</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/amla`}>Amla</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/neem`}>Neem</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/arjuna`}>Arjuna</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/guduchi`}>Guduchi</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/shatavari`}>Shatavari</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/bhringraj`}>Bhringraj</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/gokshura`}>Gokshura</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/moringa`}>Moringa</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/haritaki`}>Haritaki</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/manjistha`}>Manjistha</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/punarnava`}>Punarnava</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/shankhpushpi`}>Shankhpushpi</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/aloevera`}>Aloe Vera</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/turmeric`}>Turmeric</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/herbs/ginger`}>Ginger</Link>
                        </div>
                    </div>

                    <div className={styles.seoCategory}>
                        <span className={styles.seoTitle}>HEALTH CONCERNS:</span>
                        <div className={styles.seoLinks}>
                            <Link href={`/${language}/conditions/diabetes`}>Diabetes Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/arthritis`}>Arthritis Relief</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/digestion`}>Digestive Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/skin`}>Skin Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/heart`}>Heart Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/stress`}>Stress & Anxiety</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/immunity`}>Immunity Boost</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/hair`}>Hair Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/weight-loss`}>Weight Management</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/eye-care`}>Eye Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/respiratory`}>Respiratory Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/sexual-wellness`}>Sexual Wellness</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/liver`}>Liver Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/kidney`}>Kidney Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/women-health`}>Women's Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/men-health`}>Men's Health</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/joint-pain`}>Joint Pain</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/conditions/thyroid`}>Thyroid Care</Link>
                        </div>
                    </div>

                    <div className={styles.seoCategory}>
                        <span className={styles.seoTitle}>WELLNESS PRODUCTS:</span>
                        <div className={styles.seoLinks}>
                            <Link href={`/${language}/medicines`}>Ayurvedic Oils</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Herbal Supplements</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Chyawanprash</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Personal Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Teas & Infusions</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Immunity Kits</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Baby Care</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Yoga Accessories</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Massage Oils</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Face Packs</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Hair Oils</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Digestive Syrups</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Pain Balms</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Tooth Powders</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Copper Bottles</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Incense Sticks</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/medicines`}>Essential Oils</Link>
                        </div>
                    </div>

                    <div className={styles.seoCategory}>
                        <span className={styles.seoTitle}>THERAPIES & TREATMENTS:</span>
                        <div className={styles.seoLinks}>
                            <Link href={`/${language}/guides/panchakarma`}>Panchakarma</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/abhyanga`}>Abhyanga Massage</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/shirodhara`}>Shirodhara</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/nasya`}>Nasya Karma</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/udvartana`}>Udvartana</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/basti`}>Basti Therapy</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/virechana`}>Virechana</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/swedana`}>Swedana</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/karnapurna`}>Karnapurna</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/netra-basti`}>Netra Basti</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/marma`}>Marma Therapy</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/guides/sound-therapy`}>Sound Therapy</Link>
                        </div>
                    </div>

                    <div className={styles.seoCategory}>
                        <span className={styles.seoTitle}>SHOP BY DOSHA:</span>
                        <div className={styles.seoLinks}>
                            <Link href={`/${language}/dosha-test`}>Vata Balancing</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Pitta Balancing</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Kapha Balancing</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Tridoshic Products</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Seasonal Regimens</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Dosha Consultation</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Prakriti Analysis</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Vikriti Analysis</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Ayurvedic Diet</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Dinacharya</Link><span className={styles.seoDivider}>|</span>
                            <Link href={`/${language}/dosha-test`}>Ratricharya</Link>
                        </div>
                    </div>

                    <p className={styles.seoDescription}>
                        <strong>Ayurveda Guide</strong> is your premier online destination for authentic Ayurvedic wisdom and holistic wellness. We bridge the gap between ancient traditions and modern living, connecting you with <strong>Expert Vaidyas, Authentic Herbs, Customizable Therapies</strong>, and much more. Embrace a sustainable, natural, and balanced lifestyle. Whether you are looking for <strong>comprehensive health guides, personalized dosha plans</strong>, or <strong>premium herbal medicines</strong>, our curated platform empowers you to heal naturally. Rediscovering the science of life has never been easier.
                    </p>
                </div>
            </div>

            {/* Main Footer (Dark) */}
            <footer className={styles.mainFooter}>
                <div className={styles.container}>
                    {/* Subscribe Section */}
                    <div className={styles.subscribeSection}>
                        <div className={styles.subscribeText}>
                            <h2>Join Our Wellness Community</h2>
                            <p>Subscribe to receive holistic health tips, new product launches, exclusive offers, and expert Ayurvedic insights.</p>
                        </div>
                        <div className={styles.subscribeForm}>
                            <input type="email" placeholder="Enter your email address" className={styles.subscribeInput} />
                            <button className={styles.subscribeBtn}>Subscribe</button>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className={styles.grid}>
                        {/* Brand Column */}
                        <div className={styles.brandColumn}>
                            <Link href="/" className={styles.brandLogo}>
                                <div className={styles.brandIcon} style={{ fontSize: '0.8rem' }}>AG</div>
                                Ayurveda Guide
                            </Link>
                            <p className={styles.brandDesc}>
                                India's trusted platform for holistic healing. We bring you the essence of Ayurveda through certified doctors, premium products, and authentic knowledge, preserving our ancient heritage.
                            </p>
                            <div className={styles.contactInfo}>
                                <p><MapPin size={18} className={styles.contactIcon} /> New Delhi, India - 110001</p>
                                <p><Phone size={18} className={styles.contactIcon} /> +91 98765 43210</p>
                                <p><Mail size={18} className={styles.contactIcon} /> namaste@ayurvedaguide.com</p>
                            </div>
                            <div className={styles.socialIcons}>
                                <a href="#" aria-label="Facebook" className={styles.socialIcon}><Facebook size={18} /></a>
                                <a href="#" aria-label="Instagram" className={styles.socialIcon}><Instagram size={18} /></a>
                                <a href="#" aria-label="Twitter" className={styles.socialIcon}><Twitter size={18} /></a>
                                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={18} /></a>
                                <a href="#" aria-label="YouTube" className={styles.socialIcon}><Youtube size={18} /></a>
                            </div>
                        </div>

                        {/* Column 2: Categories */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Categories</h3>
                            <ul className={styles.columnLinks}>
                                <li><Link href={`/${language}/medicines`}>Herbal Medicines</Link></li>
                                <li><Link href={`/${language}/herbs`}>Single Herbs</Link></li>
                                <li><Link href={`/${language}/medicines`}>Essential Oils</Link></li>
                                <li><Link href={`/${language}/medicines`}>Immunity Boosters</Link></li>
                                <li><Link href={`/${language}/medicines`}>Personal Care</Link></li>
                                <li><Link href={`/${language}/medicines`}>Wellness Teas</Link></li>
                                <li><Link href={`/${language}/books`}>Ayurvedic Books</Link></li>
                                <li><Link href={`/${language}/yoga`}>Yoga & Meditation</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Featured Arts -> Featured Therapies */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Featured Therapies</h3>
                            <ul className={styles.columnLinks}>
                                <li><Link href={`/${language}/guides/panchakarma`}>Panchakarma</Link></li>
                                <li><Link href={`/${language}/guides`}>Detoxification</Link></li>
                                <li><Link href={`/${language}/guides`}>Rejuvenation</Link></li>
                                <li><Link href={`/${language}/guides`}>Stress Management</Link></li>
                                <li><Link href={`/${language}/guides`}>Weight Management</Link></li>
                                <li><Link href={`/${language}/guides`}>Skin Therapy</Link></li>
                                <li><Link href={`/${language}/guides`}>Pain Relief</Link></li>
                                <li><Link href={`/${language}/guides`}>Yoga Therapy</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Support & Info */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Support & Info</h3>
                            <ul className={styles.columnLinks}>
                                <li><Link href={`/${language}/help`}>Help Center</Link></li>
                                <li><Link href={`/${language}/doctors`}>Find a Doctor</Link></li>
                                <li><Link href={`/${language}/shipping`}>Shipping Policy</Link></li>
                                <li><Link href={`/${language}/returns`}>Returns & Refunds</Link></li>
                                <li><Link href={`/${language}/dosha-test`}>Dosha Quiz</Link></li>
                                <li><Link href={`/${language}/bulk`}>Bulk Orders</Link></li>
                                <li><Link href={`/${language}/contact`}>Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 5: Company */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Company</h3>
                            <ul className={styles.columnLinks}>
                                <li><Link href={`/${language}/about`}>About Us</Link></li>
                                <li><Link href={`/${language}/story`}>Our Story</Link></li>
                                <li><Link href={`/${language}/blog`}>Blog</Link></li>
                                <li><Link href={`/${language}/careers`}>Careers</Link></li>
                                <li><Link href={`/${language}/doctors/register`}>Join as Doctor</Link></li>
                                <li><Link href={`/${language}/sellers`}>Sell on Platform</Link></li>
                                <li><Link href={`/${language}/privacy`}>Privacy Policy</Link></li>
                                <li><Link href={`/${language}/terms`}>Terms of Service</Link></li>
                                <li><Link href={`/${language}/cookie-policy`}>Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={styles.bottomBar}>
                        <p>© 2026 Ayurveda Guide. All rights reserved.</p>
                        <p>Made with <span className={styles.heart}>♥</span> for your wellness.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
