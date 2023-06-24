import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"

// async function getData () {
//     const response = await fetch()
// }

export const metadata = {
    title: 'Главная страница'
}
export default function Home() {
    const predmetsArray = [
        { title: 'Информатика', style: '' , link: 'informatic'},
        { title: 'Математика', style: '' , link: 'maths'},
        { title: 'Физика', style: '' , link: 'physics'}
    ]
    return (
        <>
            <Header titlePage={'Главная'} />
            <div className="mt-7vh flex flex-col justify-center items-center h-93vh w-100vw">
                <div className="bg-blue-300 w-2/3 h-1/5 mb-5">
                    <h1>Для текста</h1>
                </div>
                <div className="w-2/3 h-2/3">
                    <PredmetSwiper predmetsArray={predmetsArray}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
