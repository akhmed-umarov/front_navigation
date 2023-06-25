import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"
import type { ISimplePredmet } from "@/types/IPredmet"

async function getPredmets() {
    const response = await fetch(`${process.env.URL}/predmets`)
    console.log(response);
    return await response.json() as ISimplePredmet[]
}

export const metadata = {
    title: 'Главная страница'
}
export default async function Home() {
    const predmetsArray = await getPredmets()
    return (
        <>
            <Header titlePage={'Главная'} />
            <div className="mt-7vh flex flex-col justify-center items-center h-86vh w-100vw">
                <div className="bg-blue-300 w-2/3 h-1/5 mb-5">
                    <h1>Для текста</h1>
                </div>
                <div className="w-100vw h-2/3">
                    <PredmetSwiper predmetsArray={predmetsArray}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
