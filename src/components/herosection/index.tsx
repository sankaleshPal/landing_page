import { useEffect } from "react";
import Donut from "../../assets/donut.png";
import Lines from "../../assets/topsection/lines.svg";
import Iphone from "../../assets/topsection/Iphone 7 1.png";
import menu from "../../assets/topsection/menu.svg";
import Pie from "../../assets/topsection/pie.svg";
import Services from "../../assets/topsection/set.svg";

function HeroSection() {
	
	useEffect(() => {
		const images = document.querySelectorAll(".image-container-topsection img");
		let currentIndex = 0;

		function scaleImages() {
			images.forEach((img, index) => {
				const imageElement = img as HTMLImageElement;
				if (index === currentIndex) {
					imageElement.style.transform = "scale(1)";
				} else {
					imageElement.style.transform = "scale(0.70)";
				}
			});
			currentIndex = (currentIndex + 1) % images.length;
		}

		const intervalId = setInterval(scaleImages, 2000); 
		scaleImages(); 

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section>
			<section className="donut">
				<img width={750} height={500} src={Donut} alt="donut" />
			</section>
			<div className="lines hide_mobile">
				<img width={900} src={Lines} alt="" />
			</div>
			<center>
				<h1 className="title">HipalZ</h1>
				<h3 className="title_description">
					Everything your restaurant needz to create a great experience with
					your customers
				</h3>
			</center>
			<section className="hide_mobile">
				<center className="digital_menu">
					<figure>
						<figcaption className="digital_menu_text">
							<span>
								Best digital menu
								<span className="opacity">
									{" "}
									advanced customization, fast and easy to use{" "}
								</span>
							</span>
						</figcaption>
						<img
							className="fadeInLeft"
							width={250}
							height={250}
							src={menu}
							alt=""
						/>
					</figure>
					<section className="zoomIn">
						<img width={550} height={550} src={Iphone} alt="mid-iphone" />
					</section>
					<section>
						<figure>
							<figcaption className="digital_menu_text">
								<span>
									Grow presence for restaurant{" "}
									<span className="opacity"> with your own WebApp</span>
								</span>
							</figcaption>
							<img
								className="fadeInRight"
								width={250}
								height={200}
								src={Services}
								alt=""
							/>
						</figure>
						<figure>
							<figcaption className="digital_menu_text">
								<span>
									Restaurant’s direct
									<span className="opacity">Coupons & Loyalty </span>
								</span>
							</figcaption>
							<img
								className="fadeInRight"
								width={250}
								height={200}
								src={Pie}
								alt=""
							/>
						</figure>
					</section>
				</center>
			</section>
			<section className="show_mobile">
				<center>
					<section className="mobile_Iphone">
						<img width={350} height={400} src={Iphone} alt="mid-iphone" />
					</section>
					<section className="image-container-topsection">
						<img
							className="zoomIn"
							width={110}
							height={110}
							src={Services}
							alt="Services"
						/>

						<img
							width={110}
							height={110}
							className="zoomIn"
							src={Pie}
							alt="Pie"
						/>

						<img
							width={110}
							height={110}
							className="zoomIn"
							src={menu}
							alt="Menu"
						/>
					</section>
					<section className="image-container-topsection_text">
						<article className="zoomIn">
							<div
								style={{
									textAlign: "left",
									fontSize: "0.75rem",
									width: "70%",
								}}
							>
								Grow presence for restaurant
								<span className="opacity"> with your own WebApp</span>
							</div>
						</article>
						<article className="zoomIn">
							<div
								style={{
									textAlign: "left",
									fontSize: "0.75rem",
									width: "70%",
								}}
							>
								Restaurant’s direct
								<span className="opacity"> Coupons & Loyalty</span>
							</div>
						</article>
						<article className="zoomIn">
							<div
								style={{
									textAlign: "left",
									fontSize: "0.75rem",
									width: "70%",
								}}
							>
								Best digital menu
								<span className="opacity">
									{" "}
									advanced customization, fast and easy to use{" "}
								</span>
							</div>
						</article>
					</section>
				</center>
			</section>
		</section>
	);
}

export default HeroSection;
