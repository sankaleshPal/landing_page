import { Suspense, lazy } from "react";
import Logo from "../src/assets/topsection/logo.svg";
import "./App.css";

const HeroSection = lazy(() => import("../src/components/herosection"));
const Restaurant = lazy(() => import("../src/components/resturant"));
const EcoSystems = lazy(() => import("../src/components/ecoSystem"));
const UserExp = lazy(() => import("../src/components/userExp"));
const Auto = lazy(() => import("../src/components/automateUpSell"));
const Services = lazy(() => import("../src/components/services"));
const Footer = lazy(() => import("../src/components/footer"));
const Loader = lazy(() => import("../src/components/loader"));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<main>
				<section className="nav_bar">
					<img width={60} height={60} src={Logo} alt="Logo" />
					<button type="button" className="nav_btn">
						Contact us
					</button>
				</section>
				<section style={{ position: "relative" }}>
					<Suspense fallback={<Loader />}>
						<HeroSection />
					</Suspense>
				</section>
				<Suspense fallback={<Loader />}>
					<div className="hide_mobile">
						<Restaurant />
					</div>
					<EcoSystems />
					<Auto />
					<UserExp />
					<Services />
					<Footer />
				</Suspense>
			</main>
		</Suspense>
	);
}

export default App;
