import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"
import TextBlock from "@/components/text-block/text-block"
import type { ISimplePredmet } from "@/types/IPredmet"
import Navbar from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header/header"
import Link from "next/link"
import UserInfo from "@/components/user-info/user-info"
import styled from './home.module.scss' 

async function getPredmets() {
    const response = await fetch(`${process.env.URL}/predmets`, {
        cache: 'force-cache'
    })
    return await response.json() as ISimplePredmet[]
}

export const metadata = {
    title: 'Главная страница'
}

export default async function Home() {
    const predmetsArray = await getPredmets()
    return (
        <>
            <Header navbarMode={true} titlePage={'Главная страница'} />
            <Navbar>
                <div>
                <UserInfo />
                </div>
                <nav className={styled.navbar}>
                    {predmetsArray.map(predmet => (
                        <Link key={predmet.title} href={`/${predmet.link}`} >
                            <div className={styled.navbar_link}>
                                <h2>{predmet.title}</h2>
                            </div>
                        </Link>
                    ))}
                </nav>
            </Navbar>
            <div className="h-max-h-screen overflow-hidden">
                <div className="mt-7vh flex flex-col justify-center items-center h-86vh w-100vw">
                    <div className="w-3/4 ">
                        <TextBlock text={'Наше приложение предназначено для того чтобы вы смогли получить знания в тех сферах которые вам интересны'} />
                    </div>
                    <div className="w-100vw h-2/3">
                        <PredmetSwiper predmetsArray={predmetsArray} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
