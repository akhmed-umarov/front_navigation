import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"
import type { ISimplePredmet } from "@/types/IPredmet"
import TextBlock from "@/components/text-block/text-block"

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
        <div className=" h-max-h-screen overflow-hidden">
            <Header titlePage={'Главная страница приложения'} />
            <div className="mt-7vh flex flex-col justify-center items-center h-86vh w-100vw">
                {/* <TextBlock text={'Для текста'}/> */}
                <div className="bg-blue-300 w-2/3 h-1/5 mb-5">
                    <h1>Для текста</h1>
                </div>
                <div className="w-100vw h-2/3">
                    <PredmetSwiper predmetsArray={predmetsArray}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
