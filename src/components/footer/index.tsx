import WhatsApp from "../../assets/footer/whatsapp.png";
import Call from "../../assets/footer/call.png";
import Email from "../../assets/footer/gmail.png";
import Love from "../../assets/footer/made_love.png";
import Hipal from "../../assets/footer/big_hipal.png";

const Footer = () => {
	const handleWhatsAppClick = () => {
		alert("Contact us on WhatsApp: +91 91779 14130");
	};

	const handleCallClick = () => {
		alert("Call us at: +91 91779 14130");
	};
 
	return (
		<section
			style={{
				position: "relative",
				marginTop: "100px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<section>
				<img src={Love} alt="Made with love" />
			</section>
			<section>
				<img src={Hipal} alt="Hipal logo" />
				<section
					style={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
						margin: "48px 20px",
					}}
				>
					<img
						style={{
							border: "1px solid #fff",
							padding: "24px",
							borderRadius: "50%",
							cursor: "pointer",
						}}
						width={30}
						height={30}
						src={WhatsApp}
						alt="WhatsApp"
						onClick={handleWhatsAppClick}
					/>
					<img
						style={{
							border: "1px solid #fff",
							padding: "24px",
							borderRadius: "50%",
							cursor: "pointer",
						}}
						width={30}
						height={30}
						src={Email}
						alt="Email"
					/>
					<img
						style={{
							border: "1px solid #fff",
							padding: "24px",
							borderRadius: "50%",
							cursor: "pointer",
						}}
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
