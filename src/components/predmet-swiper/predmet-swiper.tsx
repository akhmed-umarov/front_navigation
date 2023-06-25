'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from 'framer-motion'
import Link from 'next/link'
import './predmet-swiper.scss'
import 'swiper/css'
import type { ISimplePredmet } from '@/types/IPredmet';

type Props = {
    predmetsArray: ISimplePredmet[]
}

SwiperCore.use([Autoplay]);

export const PredmetSwiper = ({ predmetsArray }: Props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                scrollbar={{ draggable: true }} 
                autoplay={{delay: 10000}}
                // speed={500}
            >
                {predmetsArray.map((predmet) => (
                    <SwiperSlide key={predmet.title} >
                        <motion.div className='my-slide' >
                            <Link href={`/${predmet.link}`}>
                                <motion.div
                                    className={`my-slide-block ${predmet.title === 'Физика' ? 'bg-violet-400' : predmet.title === 'Математика' ? 'bg-blue-300' : 'bg-orange-300'}`}
                                >
                                    <h1 className=' text-white text-3xl'>{predmet.title}</h1>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}