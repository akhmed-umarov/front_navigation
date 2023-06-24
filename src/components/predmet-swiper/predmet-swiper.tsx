'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import styled from './predmet-swiper.module.scss'
import 'swiper/css'

// async function getData() {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//         cache: 'force-cache'
//     })
//     return responce.json()
// }

type TPredmet = {
    title: string,
    style: any,
    link: string
}

type Props = {
    // navbarMode?: boolean
    // navbarClick?: () => void
    // backMode?: boolean
    // backClick?: () => void
    // titlePage: string
    predmetsArray: TPredmet[]
}

//async так как сервак
export const PredmetSwiper = ({ predmetsArray }: Props) => {
    // const data = await getData()
    // console.log(data);
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {predmetsArray.map((predmet)=>(
                <SwiperSlide key={predmet.title}>
                    <div className='h-50vh w-70vw bg-slate-100 flex justify-center items-center'>
                        <Link href={`/${predmet.link}`}>
                            <div className='text-3xl duration-500 hover:scale-125'>
                                 <h1>{predmet.title}</h1>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    )
}