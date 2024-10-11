"use client";
import Image from "next/image";
import { memo, useState } from "react";
import step1 from "@/assets/img/step1.png";
import step2 from "@/assets/img/step2.png";
import toast from "react-hot-toast";

const MemoClaimCoinzSection = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const res = await fetch("https://palnesto-server.vercel.app/V1/send-mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
				}),
			});
			const data = await res.json();
			console.log(data);
			if (res.status === 200) {
				toast.success("Thank you for your contribution. We will verify and get in touch with you soon.");
			} else {
				toast(`Error: ${data.message}`);
			}
		} catch (error) {
			toast("Error sending email");
		}
	};
	return (
		<main className="relative flex items-center justify-between bg-[#010425] lg:h-[25rem] 2xl:h-[30rem] px-4 lg:px-8 2xl:px-28">
			<section className="text-white lg:grid lg:grid-cols-2 text-center lg:text-left">
				<article className="space-y-4 mt-6 lg:mt-0">
					<h1 className="text-2xl 2xl:text-4xl">
						Contribute Now & Earn GRWB Points!
					</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="text-black rounded-full min-w-[85%] md:w-96 py-3 px-4 text-base"
							placeholder="Your Email"
							required
						/>
						<button
							type="submit"
							disabled={email?.length===0}
							className={`${email?.length===0 ? 'bg-gray-500' : 'bg-[#D8031C] on_active_bounce'} min-w-[85%] text-white px-6 py-2 rounded-full lg:w-48 mt-4`}
						>
							Claim Points
						</button>
					</form>
				</article>
				<article className="text-lg flex lg:flex-row flex-col justify-around items-center lg:gap-4 pb-8">
					<picture className="lg:text-center flex justify-center items-center lg:block mt-4 lg:mt-0">
						<Image
							src={step1}
							alt="step1"
							width={300}
							height={260}
							className="scale-75 lg:scale-110 -ml-16 lg:ml-0"
						/>
						<h6 className="w-36 text-sm opacity-75 leading-6 lg:mt-8">
							Contribute on any of the given platforms.
						</h6>
					</picture>
					<picture className="lg:text-center flex justify-center items-center lg:block mb-4 lg:mb-0">
						<Image
							src={step2}
							alt="step2"
							width={195}
							height={300}
							className="scale-90 lg:scale-150 order-1 lg:order-0 lg:mt-12"
						/>
						<h6 className="w-36 text-sm opacity-75 leading-6 lg:mt-16">
							After contributing, submit your email.
						</h6>
					</picture>
					<picture className="flex lg:flex-col items-center lg:text-center lg:gap-0 mx-6 lg:-ml-2 lg:-mt-4 justify-start">
						<Image
							src="/Coin/ANIM0001.png"
							alt="Coin Animation"
							width={300}
							height={300}
							className="-ml-20 lg:ml-0"
						/>
						<h6 className="lg:w-36 text-sm opacity-75 leading-6 lg:mt-10">
							We’ll verify and reward you for your support!
						</h6>
					</picture>
				</article>
			</section>
		</main>
	);
};

const ClaimCoinzSection = memo(MemoClaimCoinzSection);
export default ClaimCoinzSection;
