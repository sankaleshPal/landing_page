"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import piechart from "@/assets/img/piechart.png";
import pieMobile from "@/assets/svg/pieMobile.svg";
import Link from "next/link";

const MemoTokenomics = () => {
	const [currentStep, setCurrentStep] = useState(1127);
	const totalSteps = 1166;

	useEffect(() => {
		let frameId: number;
		let lastTime = 0;
		const frameRate = 1000 / 18; // 36 fps

		const updateStep = (time: number) => {
			if (time - lastTime >= frameRate) {
				setCurrentStep(prevStep => {
					return prevStep < totalSteps ? prevStep + 1 : 1000;
				});
				lastTime = time;
			}
			frameId = requestAnimationFrame(updateStep);
		};

		frameId = requestAnimationFrame(updateStep);

		return () => cancelAnimationFrame(frameId);
	}, []);

	// const imageUrl = `https://grwbv2-assest.nyc3.cdn.digitaloceanspaces.com/newtokenomics/${currentStep.toString().padStart(4, '0')}.jpg`;
	const imageUrl = '/tokenomics/tokenomics.gif';

	return (
		<>
			<div className="relative h-full lg:h-screen w-full z-20 pb-[9rem] lg:pb-0">
				<picture>
					<Image
						src={imageUrl}
						alt="background"
						layout="fill"
						loading="lazy"
						data-nimg="fill"
						style={{ position: "absolute", height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }}
						objectFit="cover"
						quality={100}
						className="bg-cover bg-center bg-no-repeat z-10"
						unoptimized={true}
					/>
				</picture>
				<div className="relative z-20">
					<center className="pt-12 text-3xl 2xl:text-5xl 2xl:font-normal text-white">
						Tokenomics
					</center>
					<center className="pt-2 2xl:pt-4 text-sm 2xl:text-3xl 2xl:font-semibold text-white">
						Structuring Value for a Sustainable Future
					</center>
					<center className="hidden lg:block absolute top-[40%] lg:h-screen">
						<Image
							src={piechart}
							alt="pie"
							className="scale-75 lg:scale-50 w-screen lg:-mt-20"
						/>
					</center>
					<center>
						<Image src={pieMobile} alt="pie" className="lg:hidden" />
					</center>
					<div className="bg-[#00000050] lg:hidden text-white px-6 space-y-4">
						<h1 className="text-2xl pt-6">70%</h1>
						<h6>
							Reserved for market liquidity (for trading and rewarding pollees).
						</h6>
						<h1 className="text-2xl">20%</h1>
						<h6>
							Held by GRWB for long-term municipal bond reinvestment and
							platform development.
						</h6>
						<h1 className="text-2xl">10%</h1>
						<h6>
							Allocated for early supporters and partners (including
							crowdfunding incentives).
						</h6>
					</div>
				</div>
				<section>
					<center className="z-10 text-sm font-semibold 2xl:text-2xl text-white absolute bottom-16 lg:bottom-24 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
						For More Information on Our Tokenomics
					</center>
					<Link
						href="https://greatrwbs-organization.gitbook.io/grwb-tokenomics"
						target="_blank"
					>
						<button
							type="button"
							className="z-20 absolute bottom-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-100 rounded-full text-white px-10 py-1 bg-red-700"
						>
							Click Here
						</button>
					</Link>
				</section>
			</div>
		</>
	);
};

const Tokenomics = memo(MemoTokenomics);
export default Tokenomics;
