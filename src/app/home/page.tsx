import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"
import TextBlock from "@/components/text-block/text-block"
import type { ISimplePredmet } from "@/types/IPredmet"
import Navbar from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Link from "next/link"

async function getPredmets() {
    const response = await fetch(`${process.env.URL}/predmets`)
    return await response.json() as ISimplePredmet[]
}

export const metadata = {
    title: 'Главная страница'
}

export default async function Home() {
    const predmetsArray = await getPredmets()
    return (
        <>
            <Navbar>
                <nav className="flex flex-col w-full h-full justify-center items-center">
                    {predmetsArray.map(predmet => (
                        <Link href={`/${predmet.link}`} key={predmet.title}>
                            <div className=" my-8 font-semibold " >
                                <h2>{predmet.title}</h2>
                            </div>
                        </Link>

                    ))}
                </nav>
            </Navbar>
            <div className=" h-max-h-screen overflow-hidden">
                <Header navbarMode={true} titlePage={'Главная страница приложения'} />
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
