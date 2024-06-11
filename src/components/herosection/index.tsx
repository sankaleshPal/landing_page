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
					imageElement.style.transform = "scale(1.15)";
				} else {
					imageElement.style.transform = "scale(0.85)";
				}
			});
			currentIndex = (currentIndex + 1) % images.length;
		}

		const intervalId = setInterval(scaleImages, 2000); // Change image every 2 seconds
		scaleImages(); // Initial call to set the first image

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
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
					Everything your restaurant needz to create a a great experience with
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
						<img className="zoomIn" src={menu} alt="Menu" />
						<img className="zoomIn" src={Services} alt="Services" />
						<img className="zoomIn" src={Pie} alt="Pie" />
					</section>
				</center>
			</section>
		</section>
	);
}

export default HeroSection;
