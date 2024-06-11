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
				position: "relative",
			}}
		>
			<center
				style={{
					backgroundImage: `url(${Background})`,
					backgroundRepeat: "no-repeat",
				}}
				className="user_container"
			>
				<figure className="flex_container_user" ref={ref}>
					<figcaption className={`${isInView ? "fadeInLeft" : ""}`}>
						<h3>User Experience</h3>
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
						width={460}
						height={420}
						src={MenuSec}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default UserExp;
