import Image from 'next/image';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import styles from './../styles/Slider.module.css';

import img1 from '../public/image/1.jpg';
import img2 from '../public/image/2.jpeg';
import img3 from '../public/image/3.jpg';
import img4 from '../public/image/4.jpg';
import img5 from '../public/image/5.png';
import img6 from '../public/image/6.jpg';

import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
  }

export default function CardSlide() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

  return (
    <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img1} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img2} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img4} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img5} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img6} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img2} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img1} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={img5} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">Mobile</h3>
          </div>
        </Slider>
      </div>
  );
}
