import styles from './../styles/ShowMore.module.css';

import Image from 'next/image';
import Link from 'next/link';

import { BsShare, BsArrowClockwise } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { MdAccessTimeFilled, MdLocationPin, MdShoppingCart } from 'react-icons/md';

import img1 from '../public/image/1.jpg';
import img2 from '../public/image/2.jpeg';
import img3 from '../public/image/3.jpg';
import img4 from '../public/image/4.jpg';
import img5 from '../public/image/5.png';
import img6 from '../public/image/6.jpg';

export default function LatestProduct() {
  return (
    <div className={styles.container}>
        <div className={styles.gridContainer}>
            <div className={styles.main}>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {/* <div className="col" >
                        <div className="card">
                            <Image src={img1} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <Image src={img6} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col" >
                        <div className="card">
                            <Image src={img5} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <Image src={img4} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <Image src={img4} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Image src={img2} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Image src={img1} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Image src={img4} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Image src={img5} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Image src={img6} alt='' className="card-img-top" width={200} height={200} name='' />
                            <div className={styles.featured}>
                                <p>Featured</p>
                            </div>
                            <div className="card-body" style={{padding: 0}}>
                                <h6 className="card-title p-2 m-0">8.0 Inch CHUWI Hi8 Air</h6>
                                <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                                <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> Riyadh, Saudi Arabia</p>
                                <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> For Sale</p>
                                <p className="p-2 m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500'}}>3229.99 SAR</p>
                                <div className="card-footer" style={{padding: 0}}>
                                <ul className="list-group list-group-horizontal d-flex">
                                    <li className="list-group-item flex-fill"><Link href=""><FiHeart /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><BsShare /></Link></li>
                                    <li className="list-group-item flex-fill"><Link href=""><FaEye /></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className={styles.showMore}><BsArrowClockwise style={{color: '#aa0e1c', fontSize: '20px', marginRight: '4px'}} /><Link href=''>Show More...</Link></div>
            <div className={styles.menu} style={{background: '#CA955C', marginLeft: '2rem', width: '260px'}}>Google ADS</div>
        </div>
    </div>
  )
}
