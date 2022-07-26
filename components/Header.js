import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';
import { BsExclamationCircleFill, BsSuitHeartFill } from 'react-icons/bs';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import styles from './../styles/Header.module.css';

export default function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
            <div className={styles.display}>
                <div className={styles.info}>
                    <ul>
                        <li><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px', marginRight: '2px'}} /><Link href="/location">Saudi Arabia</Link></li>
                        <li><BsExclamationCircleFill style={{color: '#aa0e1c', fontSize: '20px', marginRight: '2px'}} /><Link href="/about">About</Link></li>
                        <li><FaPhoneAlt style={{color: '#aa0e1c', fontSize: '20px', marginRight: '2px'}} /><Link href="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className={styles.auth}>
                    <ul>
                        <li><BsSuitHeartFill style={{color: '#aa0e1c', fontSize: '20px', marginRight: '2px'}} /><Link href="/">Favorite ADS</Link></li>
                        <li><FaUser style={{color: '#aa0e1c', fontSize: '20px', marginRight: '2px'}} /><Link href="/">Register Or Sign in</Link></li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  )
}
