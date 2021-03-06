import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';

export default function Hero(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 6000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
      	autoplaySpeed: 6000,
      	cssEase: "linear",


		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className={props.darkMode ? "dark" : ""}>
			<div className='hero-photo all'>
				<Slider {...settings}>
					<div>
						<img className='img-hero' src={one}></img>
					</div>
					<div>
						<img className='img-hero' src={two}></img>
					</div>
					<div>
						<img className='img-hero' src={three}></img>
					</div>
					<div>
						<img className='img-hero' src={four}></img>
					</div>
					<div>
						<img className='img-hero' src={five}></img>
					</div>
					<div>
						<img className='img-hero' src={six}></img>
					</div>
					<div>
						<img className='img-hero' src={seven}></img>
					</div>
					<div>
						<img className='img-hero' src={eight}></img>
					</div>
					<div>
						<img className='img-hero' src={nine}></img>
					</div>
				</Slider>
				<h2>Join my amazing hiking adventures around the world!</h2>
			</div>
		</section>
	);
}
