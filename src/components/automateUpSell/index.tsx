import Background from "../../assets/background.svg";
import Calender from "../../assets/end_section/big_cal.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./auto.css";

const Auto = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
				}}
				className="auto_container"
			>
				<figure className="flex_container_auto" ref={ref}>
					<figcaption className={`${isInView ? "fadeInRight" : ""}`}>
						<h3>Automate up-selling</h3>
						<ul>
							<li>
								People buy what they see: &nbsp;
								<small className="opacity">
									Showcase your dishes like never before. Use images & videos to
									clearly express your dishes.
								</small>
							</li>
							<br />
							<li>
								Help them order:&nbsp;
								<small className="opacity">
									When your customers find it difficult to order, Hipalz
									suggestions make sure they spend more time eating and less
									time selecting.
								</small>
							</li>
							<br />
							<li>
								Custom Tags:&nbsp;
								<small className="opacity">
									Dont let them miss important things. Contains “alcohol”,
									”nuts”, “chefs special” and more. Make customized to your
									menu.
								</small>
							</li>
						</ul>
					</figcaption>

					<img
						className={isInView ? "fadeInLeft" : ""}
						width={250}
						height={250}
						src={Calender}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default Auto;
