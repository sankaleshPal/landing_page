import Background from "../../assets/background.svg";
import Twoiphones from "../../assets/end_section/twoIphonmes.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./module.eco.css";

const EcoSystems = () => {
	const ref = useRef(null);
	const isInView = useInView(ref,{once:true});

	return (
		<section
			style={{
				paddingTop: "5rem",
				position: "relative",
			}}
		>
			<center
				style={{
					backgroundImage: `url(${Background})`,
					backgroundRepeat: "no-repeat",
					width: "1275px",
					height: "608px",
					position: "relative",
					margin: "0 auto",
					overflow: "hidden",
				}}
			>
				<figure className="flex_container" ref={ref}>
					<figcaption
						style={{
							width: "40%",
							textAlign: "left",
							paddingLeft: "5rem",
							lineHeight: "1.6", // Added line height for better readability
						}}
						className={`${isInView ? "fadeInLeft" : ""}`}
					>
						<h3
							style={{
								fontSize: "2rem",
								fontWeight: "300",
								color: "#FFFBA1",
								lineHeight: "1.6", // Added line height for better readability
							}}
						>
							Build a digital ecosystem that connects
						</h3>
						<ul>
							<li>
								Connects O2O: &nbsp;
								<small className="opacity">
									customers reach online, customers reach offline. Make sure to
									unify their experience with Hipalz.
								</small>
							</li>
							<br />
							<li>
								Connects Menu to everything:&nbsp;
								<small className="opacity">
									Why limit digitization to a digital menu? Navigate payments,
									loyalty, booking & coupons, and more.
								</small>
							</li>
						</ul>
					</figcaption>

					<img
						className={isInView ? "fadeInRight" : ""}
						width={250}
						height={250}
						src={Twoiphones}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default EcoSystems;
