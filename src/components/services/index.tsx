import Background from "../../assets/background.svg";
import ServicesImg from "../../assets/end_section/all_services.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./service.css";

const Services = () => {
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
				<figure className="flex_container_service" ref={ref}>
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
							Building an Ecosystem
						</h3>
						<ul>
							<li>
								Promotional Banners: &nbsp;
								<small className="opacity">
									You can Feature seasonal offers, new dishes, or special events
									through eye-catching banners within the menu interface.
								</small>
							</li>
							<br />
							<li>
								Loyalty cards:&nbsp;
								<small className="opacity">
									Incorporates loyalty programs and feedback options to build a
									community and encourage repeat visits.
								</small>
							</li>
							<br />
							<li>
								Real-Time Updates:&nbsp;
								<small className="opacity">
									Allows for real-time menu updates and announcements, keeping
									customers informed and engaged with the latest offerings and
									news within you mobile
								</small>
							</li>
							<br />
							<li>
								With POS without POS :&nbsp;
								<small className="opacity">
									Works seamlessly with Hipalz Pos or without. Integrates easily
									with your day to day operations.
								</small>
							</li>
						</ul>
					</figcaption>

					<img
						className={isInView ? "fadeInLeft" : ""}
						width={250}
						height={250}
						src={ServicesImg}
						alt="Two iPhones displaying the Hipalz app"
					/>
				</figure>
			</center>
		</section>
	);
};

export default Services;
