import styles from './../styles/Footer.module.css';
import Image from 'next/image';

import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaTwitter, FaInstagram } from 'react-icons/fa';


import appstore from '../public/image/appstore.jpeg';
import appgallery from '../public/image/appgallery.jpeg';
import googleplay from '../public/image/googleplay.jpeg';

export default function Footer() {
  return (
    <div style={{background: 'rgba(0,0,0,.1)' }}>
      <div className={styles.container}>
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><BsTelephone /> (+966) 123 456 7890</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><CgMail /> Info@jufrah.com</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><GrLocation /> Riyadh, Saudi Arabia</a></li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Download</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">< Image src={appstore} /></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">< Image src={appgallery} /></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">< Image src={googleplay} /></a></li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Login</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sign Up</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Change Country</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Setting</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
              </ul>
            </div>

            <div className="col-2">
              <h5>My Account</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Post an AD</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">My ADS</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Favorite ADS</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vouchers</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Profile Setting</a></li>
              </ul>
            </div>

            <div className="col-3 offset-1">
              <form>
                <h5>Subscribe Now</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary px-5" type="button" style={{marginLeft: '-20px', background: '#aa0e1c'}}><FiSend /></button>
                </div>
              </form>
              <ul className="list-unstyled d-flex my-3">
                <li className="ms-3"><a className="link-dark" href="#"><FaTwitter /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><FaInstagram /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><BsWhatsapp /></a></li>
              </ul>
            </div>
          </div>
          <div className=" py-1 my-1 border-top">
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
