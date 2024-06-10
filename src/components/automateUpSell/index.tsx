import Background from "../../assets/background.svg";
import Calender from "../../assets/end_section/big_cal.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./auto.css";

const Services = () => {
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

export default Services;
