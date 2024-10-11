import dynamic from "next/dynamic";

const ClaimCoinzSection = dynamic(
	() => import("@/app/components/claimPointsSection"),
);
const Footer = dynamic(() => import("@/app/components/footer"));
const Navbar = dynamic(() => import("@/app/components/header"));
const HeroSection = dynamic(() => import("@/app/components/heroSection"));
const MidSection = dynamic(() => import("@/app/components/midSection"));
const SharksRoute = dynamic(() => import("@/app/components/sharksRoute"));
const Tokenomics = dynamic(() => import("@/app/components/tokenomics"));


export async function generateMetadata() {
	return {
		title: "GRWB Coin",
		description: "Welcome to the Home Page",
	};
}
const Grwb = () => {
  return (
    <main className="overflow-hidden">
			<Navbar />
			{/* <div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					textAlign: "center",
				}}
			>
				<div>
					<h2 style={{ fontWeight: "bold" }}>Important Update</h2>
					<p>
						We want to extend our sincere thanks to everyone for your incredible
						support and overwhelming feedback. Due to the tremendous response,
					</p>
					<p>
						our site experienced a temporary disruption. We're working swiftly
						to resolve this and will be back up and running shortly.
					</p>
					<p>
						{" "}
						Please bear with us for just sometime as we make the necessary
						adjustments. We appreciate your patience and understanding.
					</p>
				</div>
			</div> */}

			<HeroSection />
			<article id="#contributenow" className="hidden lg:inline-block">
				<MidSection />
				<ClaimCoinzSection />
			</article>
			<article className="lg:hidden">
				<ClaimCoinzSection />
				<section id="#contribute">
					<MidSection />
				</section>
			</article>
			<SharksRoute />
			<Tokenomics />
			<Footer />
		</main>
  )
}

export default Grwb