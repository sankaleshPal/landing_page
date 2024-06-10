import Background from "../../assets/background.svg";
import MenuSec from "../../assets/end_section/menuSec.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./module.user.css";

const UserExp = () => {
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
				<figure className="flex_container_user" ref={ref}>
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
							User Experience
						</h3>
						<ul>
							<li>
								User-Friendly Layout: &nbsp;
								<small className="opacity">
									Easy-to-navigate menu structure, mirroring the familiarity of
									a physical menu with added digital convenience
								</small>
							</li>
							<br />
							<li>
								Quick Access:&nbsp;
								<small className="opacity">
									Swiftly browse through menu, payments, loyalty and other
									engagements.
								</small>
							</li>
							<br />
							<li>
								Search and Filter Options&nbsp;
								<small className="opacity">
									Advanced search functionalities and filtering options to help
									users quickly locate specific items or dietary preferences
									quickly.
								</small>
							</li>
						</ul>
					</figcaption>

					<img
						className={isInView ? "fadeInRight" : ""}
						width={250}
						height={250}
						src={MenuSec}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default UserExp;
