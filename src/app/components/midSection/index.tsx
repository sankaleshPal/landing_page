import React, { memo } from 'react'
import midSectionBg from '@/assets/img/midsectionbg_linear.png'
import Link from 'next/link'
import wefunder from '@/assets/svg/wefunder.svg'
import kickstarter from '@/assets/svg/kickstarter.svg'
import gofundme from '@/assets/svg/gofundme.svg'
import Image from 'next/image'

const tableData = [
    {
        tier: 'Tier1',
        donation: '$10 - $50 donation',
        basicPoints: '1 point per $1',
        firstweekBonus: '1.20 point per $1',
        secondWeekBonus: '1.10 point per $1'
    }, {
        tier: 'Tier2',
        donation: '$51 - $100 donation',
        basicPoints: '1.2 point per $1',
        firstweekBonus: '1.44 point per $1',
        secondWeekBonus: '1.32 point per $1'
    }, {
        tier: 'Tier3',
        donation: '$101 - $500 donation',
        basicPoints: '1.5 point per $1',
        firstweekBonus: '1.80 point per $1',
        secondWeekBonus: '1.65 point per $1'
    }, {
        tier: 'Tier4',
        donation: '$501 + donation',
        basicPoints: '2 point per $1',
        firstweekBonus: '2.40 point per $1',
        secondWeekBonus: '2.20 point per $1'
    }
]

const MemoMidSection = () => {
    return (
        <main style={{
            backgroundImage: `url(${midSectionBg?.src})`,
        }}
            className='w-[100dvw] text-white lg:grid lg:grid-cols-2 lg:place-items-center 2xl:gap-36 relative bg-cover bg-center bg-no-repeat object-cover p-4 2xl:p-20'
        >
            <section>
                <section className='table-size overflow-x-auto'>
                    <table className="divide-y divide-gray-100 backdrop-blur-sm border border-gray-100 rounded-xl 2xl:scale-100">
                        <thead style={{
                            background: '#FFFFFF24'
                        }}>
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs lg:!text-base text-white !font-semibold uppercase tracking-wider">
                                    Tier
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs lg:!text-base  text-white !font-semibold uppercase tracking-wider">
                                    Donation
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs lg:!text-base  text-white !font-semibold uppercase tracking-wider">
                                    Basic Points
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs lg:!text-base  text-white !font-semibold uppercase tracking-wider">
                                    First Week Bonus
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs lg:!text-base  text-white !font-semibold uppercase tracking-wider">
                                    Second Week Bonus
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tableData.map((row, index) => (
                                <tr key={index?.toString()}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:!text-base  font-medium text-white">{row.tier}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:!text-base  text-white">{row.donation}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:!text-base  text-white">{row.basicPoints}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:!text-base  text-white">{row.firstweekBonus}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:!text-base  text-white">{row.secondWeekBonus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <center className='text-xs my-4'>Rewards are sent after manually verifying email within 24 hours</center>
            </section>
            <section className='text-white space-y-4 mt-6 lg:-mt-12'>
                <h1 className='text-xl lg:text-4xl'>Our Reward Tiers and Time-based Bonuses</h1>
                <h6 className='text-3xl mt-0'>Contribute Now</h6>
                <article className='flex flex-wrap gap-4'>
                    <Link href="https://www.kickstarter.com/projects/greatrwb/greatrwb-your-voice-rewarded" target="_blank">
                        <button type="button" className='on_active_boune bg-[#00CF73] p-2 px-6 h-[3rem] w-[10rem] table-size rounded-xl text-xs !font-bold text-white on_active_bounce new-btn-shine'>
                            <Image src={kickstarter} alt="kickstarter" width={100} height={32} />
                        </button>
                    </Link>
                    <br />
                    <Link href="https://wefunder.com/greatrwbsolllc1" target='_blank'>
                        <button type="button" className='on_active_boune p-2 px-6 rounded-xl h-[3rem] w-[10rem] table-size text-xs !font-bold bg-[#3077B8] on_active_bounce new-btn-shine'>
                            <Image src={wefunder} alt="wefunder" width={100} height={32} />
                        </button>
                    </Link>
                    <br />
                    <Link href="https://www.gofundme.com/f/empower-voices-support-greatrwbs-mission" target='_blank'>
                        <button type="button" className='on_active_boune bg-[#00CF73] h-[3rem] w-[10rem] table-size p-2 px-6 rounded-xl text-xs !font-bold text-white on_active_bounce new-btn-shine'>
                            <Image src={gofundme} alt="gofundme" width={100} height={32} />
                        </button>
                    </Link>
                </article>
            </section>
        </main>
    )
}

const MidSection = memo(MemoMidSection)
export default MidSection