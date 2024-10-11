"use client";
import { memo, useCallback } from 'react';
import Image from 'next/image'
import foldWhite from '@/assets/img/fold_white_tape.png'

const MemoHeroSection = () => {

  const redirectContribute = useCallback((elementId:string) =>{
    const element = document.getElementById(elementId)
    console.log(element)
    element?.scrollIntoView({behavior: 'smooth', block:'start'})
    setTimeout(()=>{
      document.documentElement.style.scrollBehavior = 'auto'
    },1000)
  },[])

  return (
    <main className='relative h-full z-20 pt-24 lg:bg-cover bg-center lg:bg-no-repeat lg:object-cover hero-bg'>
      <div className='lg:hidden absolute inset-0 bg-black opacity-50' />
      <section className='z-20 relative flex lg:flex-row flex-col justify-between 2xl:items-center 2xl:gap-24 mx-6 2xl:mx-10 py-5'>
        <section className='my-5 -mt-24 lg:mt-0 lg:w-[40%]'>
          <article className='text-white 2xl:ml-14 pb-4'>
            <h1 className='text-3xl 2xl:text-7xl !font-semibold lg:text-left text-center'>Great RWB: Your Voice Rewarded</h1>
            <p className='text-sm 2xl:text-3xl !font-normal opacity-75 my-4 lg:text-left text-center'>Express your opinion with complete privacy, <br />participate in polls, and earn rewards for your voice.</p>
          </article>
          <section className='backdrop-blur-sm lg:mx-auto 2xl:scale-100 relative w-full h-[175px] 2xl:w-[670px] 2xl:mt-10 2xl:h-[274px] rounded-2xl' style={{
            border: '1px solid',
            backgroundColor: '#3B3B3B50',
          }}>
            <div className='relative' style={{
              background: "linear-gradient(207.2deg, rgba(255, 255, 255, 0) 16.47%, rgba(102, 102, 102, 1) 51.4%, rgba(255, 255, 255, 0) 95.16%)",
            }} />
            <Image src={foldWhite} alt="foldWhite" className='scale-75 2xl:scale-100 absolute -top-16 2xl:-left-14 -left-12' />
            <h1 style={{
              rotate: '-9deg',
            }} className='!font-semibold text-base 2xl:text-2xl absolute -top-5 left-6 2xl:-top-6 2xl:-left-4 text-black'>Donate Now</h1>
            <article className='backdrop-blur-none relative text-white m-4 2xl:h-[175px] rounded-2xl' style={{
              border: '1px solid transparent',
              backgroundColor: '#3B3B3B50',
            }}>
              <section className='grid grid-cols-3 place-items-center mt-4'>
                <article className='text-center'>
                  <h1 className='text-base 2xl:text-4xl'>$ 1,200</h1>
                  <h6 className='text-sm 2xl:text-lg whitespace-nowrap'>Raised so far</h6>
                </article>
                <div className='h-full border-l-2 border-gray-400' />
                <article className='text-center'>
                  <h1 className='text-base 2xl:text-3xl'>$ 200,000</h1>
                  <h6 className='text-sm 2xl:text-lg'>Our Goal</h6>
                </article>
              </section>
              <div className='relative mt-4 mx-auto w-full h-[20px] 2xl:w-[600px] 2xl:h-[42px] bg-gray-300 rounded-md overflow-hidden'>
                <div className='absolute top-0 left-0 h-full bg-red-600' style={{ width: `${(1000 / 20000) * 100}%` }} />
              </div>
              <div className='flex justify-between mt-2 2xl:w-[600px] mx-auto text-xs'>
                <span>$0</span>
                <span>$200,000</span>
              </div>
            </article>
              <button onClick={()=>redirectContribute('#contributenow')} type="button" className='on_active_bounce text-xs lg:text-base inter w-full h-[2.5rem] 2xl:h-[3rem] rounded-b-2xl text-white absolute lg:-bottom-4 bg-[#D8031C] overflow-hidden'>Contribute Now</button>
              <button onClick={()=>redirectContribute('#contribute')} type="button" className='lg:hidden on_active_bounce text-xs lg:text-base inter w-full h-[2.5rem] 2xl:h-[3rem] rounded-b-2xl text-white absolute lg:-bottom-4 bg-[#D8031C] overflow-hidden'>Contribute Now</button>
          </section>
        </section>
        <section className='my-5'>
          <iframe src="https://www.youtube.com/embed/Clr4lpH0SeY?autoplay=1&loop=1&playlist=Clr4lpH0SeY" title="Great RWB Video"
            allow="autoplay"
            allowFullScreen className='rounded-2xl w-full h-[200px] lg:min-w-[450px] lg:min-h-[300px] 2xl:min-h-[600px] 2xl:min-w-[800px] 2xl:h-full 2xl:w-full' />
        </section>
      </section>
    </main>
  )
}
const HeroSection = memo(MemoHeroSection)
export default HeroSection