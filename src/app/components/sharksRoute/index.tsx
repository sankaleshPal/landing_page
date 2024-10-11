"use client";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import sharkfin from "@/assets/img/sharkfin.png";
import Spinner from "../spinner";

const MemoSharksRoute = () => {
	// const [currentStep, setCurrentStep] = useState(1000);
	// const totalSteps = 1119; // Last image number

	// useEffect(() => {
	//     let frameId: number;
	//     let lastTime = 0;
	//     const frameRate = 1000 / 36; // 36 fps

	//     const updateStep = (time: number) => {
	//         if (time - lastTime >= frameRate) {
	//             setCurrentStep(prevStep => {
	//                 return prevStep < totalSteps ? prevStep + 1 : 1000;
	//             });
	//             lastTime = time;
	//         }
	//         frameId = requestAnimationFrame(updateStep);
	//     };

	//     frameId = requestAnimationFrame(updateStep);

	//     return () => cancelAnimationFrame(frameId);
	// }, []);

	// const imageUrl = `https://grwbv2-assest.nyc3.cdn.digitaloceanspaces.com/roadmap/${currentStep.toString().padStart(4, '0')}.jpg`;


	return (
		<main id="#contribute" className="bg-[#010101] text-4xl flex flex-col items-center relative">
			<center className="z-20 text-4xl text-white mt-10">
				The Shark's Route
			</center>
			<div className="z-20 w-[75%] border border-b-1 border-[#ffffff] absolute mt-52 lg:mt-44" />
			<div className="h-[800px] z-20 text-white flex flex-nowrap justify-between w-[75%] mt-24 relative lg:overflow-x-visible overflow-x-auto">
				<div className="flex flex-nowrap w-full lg:flex-wrap">
					<picture className="min-w-full lg:min-w-0 lg:absolute lg:-top-6 lg:-left-4">
						<Image src={sharkfin} alt="shark" />
						<h1 className="absolute ml-5 -mt-10">1</h1>
						<br />
						<h6 className="leading-5 lg:lg:leading-6 2xl:leading-10 text-[1rem] 2xl:text-[2rem] w-[15rem] 2xl:w-[20rem]">
							Phase 1: Platform Development and Early Community Onboarding
							(Months 1-6)
						</h6>
						<br />
						<ul className="w-[15rem] 2xl:w-[20rem] inter lg:lg:leading-6 2xl:leading-10">
							<li className="flex text-sm 2xl:text-xl">
								<Spinner />
								Build the core platform for meme coin creation and gamified poll
								rewards.
							</li>
							<li className="flex text-sm 2xl:text-xl lg:lg:leading-6 2xl:leading-10">
								<Spinner />
								Onboard early adopters, including crypto communities,
								influencers, and niche groups.
							</li>
						</ul>
					</picture>
					<picture className="min-w-full lg:min-w-0 lg:absolute lg:-top-6 lg:left-[40%]">
						<Image src={sharkfin} alt="shark" />
						<h1 className="absolute ml-5 -mt-10">2</h1>
						<br />
						<h6 className="lg:leading-6 2xl:leading-10 text-[1rem] 2xl:text-[2rem] w-[15rem] 2xl:w-[20rem]">
							Phase 2: Smart Contract Integration and Market Expansion (Months
							7-12)
						</h6>
						<br />
						<ul className="w-[15rem] 2xl:w-[20rem] inter ">
							<li className="flex text-sm 2xl:text-xl lg:lg:leading-6 2xl:leading-10 ">
								<Spinner />
								Begin integrating smart contracts to automate payment
								distribution, reward management, and poll creation.
							</li>
							<li className="flex text-sm 2xl:text-xl lg:lg:leading-6 2xl:leading-10">
								<Spinner />
								Expand marketing efforts to target larger enterprises and
								corporate partners.
							</li>
						</ul>
					</picture>
					<picture className="min-w-full lg:min-w-0 lg:absolute lg:-top-6 lg:-right-20">
						<Image src={sharkfin} alt="shark" />
						<h1 className="absolute ml-5 -mt-10">3</h1>
						<br />
						<h6 className="lg:leading-6 2xl:leading-10 text-[1rem] 2xl:text-[2rem] w-[15rem] 2xl:w-[20rem]">
							Phase 3: Municipal Bond Reinvestment & Enterprise Scaling
							(Months 12-18)
						</h6>
						<br />
						<ul className="w-[15rem] 2xl:w-[20rem] inter ">
							<li className="flex text-sm 2xl:text-xl lg:lg:leading-6 2xl:leading-10">
								<Spinner />
								Reinvest profits into municipal bonds for long-term stability.
							</li>
							<li className="flex text-sm 2xl:text-xl lg:lg:leading-6 2xl:leading-10">
								<Spinner />
								Scale operations by acquiring enterprise clients and entering
								new markets.
							</li>
						</ul>
					</picture>
				</div>
			</div>
			<picture className="lg:w-full lg:h-[50vh]">
				<Image
					src={"/sharkroute/1000.jpg"}
					srcset="
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=640&q=75 640w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=750&q=75 750w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=828&q=75 828w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=1080&q=75 1080w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=1200&q=75 1200w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=1920&q=75 1920w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=2048&q=75 2048w,
					/_next/image?url=%2Fsharkroute%2F1000.jpg&w=3840&q=75 3840w
				"
					alt="shark"
					layout="fill"
					objectFit="cover"
					className="bg-cover bg-center bg-no-repeat"
				/>
			</picture>
		</main>
	);
};

const SharksRoute = memo(MemoSharksRoute);
export default SharksRoute;
