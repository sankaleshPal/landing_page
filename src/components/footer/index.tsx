import WhatsApp from "../../assets/footer/whatsapp.png";
import Call from "../../assets/footer/call.png";
import Email from "../../assets/footer/gmail.png";
import Love from "../../assets/footer/made_love.png";
import Hipal from "../../assets/footer/big_hipal.png";
import "./footer.css";

const Footer = () => {
	const handleWhatsAppClick = () => {
		alert("Contact us on WhatsApp: +91 91779 14130");
	};

	const handleCallClick = () => {
		alert("Call us at: +91 91779 14130");
	};

	return (
		<section className="footer_container">
			<section className="footer_container_love_cont">
				<img
					className="footer_container_love"
					width={520}
					height={350}
					src={Love}
					alt="Made with love"
				/>
			</section>
			<section>
				<section className="footer_container_love_cont">
					<img
						className="footer_container_hipal_Logo"
						src={Hipal}
						alt="Hipal logo"
					/>
				</section>
				<section className="footer_container_hipal">
					<img
						className="footer_container_hipal_img"
						width={30}
						height={30}
						src={WhatsApp}
						alt="WhatsApp"
						onClick={handleWhatsAppClick}
					/>
					<img
						className="footer_container_hipal_img"
						width={30}
						height={30}
						src={Email}
						alt="Email"
					/>
					<img
						className="footer_container_hipal_img"
						width={30}
						height={30}
						src={Call}
						alt="Call"
						onClick={handleCallClick}
					/>
				</section>
			</section>
		</section>
	);
};

export default Footer;
