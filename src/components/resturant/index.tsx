import RestaurantImage from "../../assets/restaurant/rest.svg";
import TwoIphones from "../../assets/mid_section/twoiphones.png";
import Calender from "../../assets/mid_section/calendar.png";
import Loyalty from "../../assets/mid_section/loyalty.png";
import Mobile from "../../assets/mid_section//Mobile.png";
import Services from "../../assets/mid_section/services.png";
import Smart from "../../assets/mid_section/smart selling.png";
import Text from "../../assets/text.png";
import { motion } from "framer-motion";
import "./module.restaurant.css";
import { useRef } from "react";

const Restaurant = () => {
	const ref = useRef<HTMLElement>(null);
	return (
		<section style={{ margin: "-4rem 0 5rem 0", position: "relative" }}>
			<div style={{ textAlign: "center" }}>
				<h2>
					<span
						style={{
							color: "#4990FB",
							fontSize: "2rem",
							fontWeight: "200",
						}}
					>
						Re imagine &nbsp;
					</span>
					<span
						style={{
							fontSize: "2rem",
							fontWeight: "500",
						}}
					>
						Digital menu{" "}
					</span>
				</h2>
				<h5
					style={{
						color: "#4990FB",
						fontSize: "0.825rem",
						fontWeight: "200",
					}}
					className="opacity"
				>
					Take your customer experience to next level
				</h5>
				<p>“Imagine technology for your restaurant, Imagine Hipalz”</p>
			</div>
			<motion.section ref={ref}>
				<center>
					<img
						style={{
							scale: 1.25,
							marginLeft: "-4rem",
						}}
						src={RestaurantImage}
						alt="restaurants"
					/>
				</center>
			</motion.section>

			<center
				style={{
					margin: "3rem 0 5rem 0",
					fontSize: "1.5rem",
					fontWeight: "200",
					color: "#A1C9FF",
				}}
			>
				What can you do with &nbsp;
				<span
					style={{
						fontSize: "1.5rem",
					}}
					className="title"
				>
					HipalZ ?
				</span>
			</center>
			<center>
				<div className="container">
					<motion.div className="first" >
						<video
							style={{
								marginTop: "1rem",
							}}
							width="380"
							height="500"
							loop
							muted
							autoPlay
						>
							<source src="/fin.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<img
							style={{
								marginTop: "1rem",
							}}
							src={Text}
							alt="Text"
						/>
					</motion.div>
					<motion.div className="sec" whileHover={{ scale: 1.125 }}>
						<img src={Smart} alt="two-iphones" />
					</motion.div>
					<motion.div className="third" whileHover={{ scale: 1.125 }}>
						<img src={Services} alt="two-iphones" />
					</motion.div>
					<motion.div className="fifth" whileHover={{ scale: 1.125 }}>
						<img src={Calender} alt="two-iphones" />
					</motion.div>
					<motion.div className="sixth" whileHover={{ scale: 1.125 }}>
						<img src={Loyalty} alt="two-iphones" />
					</motion.div>
					<motion.div className="fourth" whileHover={{ scale: 1.125 }}>
						<img src={TwoIphones} alt="two-iphones" />
					</motion.div>
				</div>
			</center>
		</section>
	);
};

export default Restaurant;
