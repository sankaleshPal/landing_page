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
					width: "1275px",
					height: "608px",
					position: "relative",
					margin: "0 auto",
					overflow: "hidden",
				}}
			>
				<figure className="flex_container_auto" ref={ref}>
					<figcaption
						style={{
							width: "40%",
							textAlign: "left",
							paddingLeft: "5rem",
							lineHeight: "1.6",
						}}
						className={`${isInView ? "fadeInRight" : ""}`}
					>
						<h3
							style={{
								fontSize: "2rem",
								fontWeight: "300",
								color: "#FFFBA1",
								lineHeight: "1.6",
							}}
						>
							Automate up-selling 
						</h3>
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
