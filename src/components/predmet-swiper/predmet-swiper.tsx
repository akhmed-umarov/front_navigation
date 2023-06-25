'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from 'framer-motion'
import Link from 'next/link'
import './predmet-swiper.scss'
import 'swiper/css'
import type { ISimplePredmet } from '@/types/IPredmet';
import { API_URL } from '@/http';

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
                autoplay={{ delay: 10000 }}
            >
                {predmetsArray.map((predmet) => {
                        console.log(`url(${API_URL}/${predmet.imagUrl})`);
                    return (
                        <SwiperSlide key={predmet.title} >
                        <motion.div className='my-slide' >
                            <Link href={`/${predmet.link}`}>
                                <motion.div
                                    style={{ backgroundOrigin: 'border-box' , backgroundImage: `url(${API_URL}/uploads/${predmet.imagUrl})` , backgroundSize: 'cover' }}
                                    className={`my-slide-block ${predmet.title === 'Физика' ? 'bg-violet-400' : predmet.title === 'Математика' ? 'bg-blue-300' : 'bg-orange-300'}`}>
                                    <h1 className=' text-white text-3xl'>{predmet.title}</h1>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                    )
            })}
            </Swiper>
        </>
    )
}