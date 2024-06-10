import Donut from "../../assets/donut.png";
import Lines from "../../assets/topsection/lines.svg";
import Iphone from "../../assets/topsection/Iphone 7 1.png";
import menu from "../../assets/topsection/menu.svg";
import Pie from "../../assets/topsection/pie.svg";
import Services from "../../assets/topsection/set.svg";

function HeroSection() {
  return (
    <section>
				<section className="donut">
					<img width={750} height={500} src={Donut} alt="donut" />
				</section>
				<div className="lines">
					<img  width={900}  src={Lines} alt="" />
				</div>
				<center >
					<h1 className="title">HipalZ</h1>
					<h3 className="title_description">
						Everything your restaurant needz to create a a great experience with
						your customers
					</h3>
				</center>
				<center className="digital_menu">
					<figure >
						<figcaption className="digital_menu_text">
							<span>
								Best digital menu
								<span className="opacity">
									{" "}
									advanced customization, fast and easy to use{" "}
								</span>
							</span>
						</figcaption>
						<img className="fadeInLeft" width={250} height={250} src={menu} alt="" />
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
							<img className="fadeInRight" width={250} height={200} src={Services} alt="" />
						</figure>
						<figure>
							<figcaption className="digital_menu_text">
								<span>
									Restaurant’s direct
									<span className="opacity">Coupons & Loyalty </span>
								</span>
							</figcaption>
							<img className="fadeInRight" width={250} height={200} src={Pie} alt="" />
						</figure>
					</section>
				</center>
			</section>
  )
}

export default HeroSection