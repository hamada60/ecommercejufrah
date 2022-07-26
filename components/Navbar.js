import Link from 'next/link';
import Image from 'next/image';
import styles from './../styles/Navbar.module.css';
import { FaBeer } from 'react-icons/fa';
import { BsPlusSquare } from 'react-icons/bs';
import logo from '../public/image/logo.jpg';

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div>
                {/* <h3><Image src={logo} width="350px" height="60px" alt='' name='' /></h3> */}
            </div>
            <div className={styles.filter}>
                <form>
                    <input type="text" id={styles.category} placeholder='#Laptop , Mobile , TV ...' name='' />
                    <input type="text" placeholder="Location" />
                    <select placeholder='Select Category' name="">
                        <option>Laptop</option>
                        <option>TV</option>
                        <option>Mobile</option>
                    </select>
                    <input type="submit" name='' value='Search' />
                </form>
            </div>
            <div className={styles.post}>
                <button><BsPlusSquare style={{color: '#ffffff', fontSize: '20px', marginRight: '8px'}} /> Post An Ad</button>
            </div>
        </div>
    </div>
  )
}
