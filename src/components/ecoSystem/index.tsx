import Background from "../../assets/background.svg";
import Twoiphones from "../../assets/end_section/twoIphonmes.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./module.eco.css";

const EcoSystems = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			style={{
				position: "relative",
			}}
		>
			<center
				style={{
					backgroundImage: `url(${Background})`,
					backgroundRepeat: "no-repeat",
				}}
				className="eco_container"
			>
				<figure className="flex_container_eco" ref={ref}>
					<figcaption className={`${isInView ? "fadeInLeft" : ""}`}>
						<h3>Build a digital ecosystem that connects</h3>
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
						width={360}
						height={360}
						src={Twoiphones}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default EcoSystems;
