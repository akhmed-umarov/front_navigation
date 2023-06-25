import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"
import type { ISimplePredmet } from "@/types/IPredmet"
import TextBlock from "@/components/text-block/text-block"
import Navbar from "@/components/navbar/navbar"

async function getPredmets() {
    const response = await fetch(`${process.env.URL}/predmets`)
    //  { 
        // next: { 
        //     revalidate: 10
        // }
    // }
    

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
