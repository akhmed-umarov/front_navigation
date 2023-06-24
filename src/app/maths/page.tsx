import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PredmetSwiper } from "@/components/predmet-swiper/predmet-swiper"


export const metadata = {
    title: 'Физика'
}


async function getData() {
    const res = await fetch(`${process.env.URL}/physics` , { cache: 'force-cache' } );
    const physics = await res.json()
    const predmetsRes = await fetch(`${process.env.URL}/predmets`);
    const predmets = await predmetsRes.json();
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return res.json();
  }

// export const getStaticProps = async ()=> { 
//     const res = await fetch()
//     const physics = await res.json()
//     const predmetsRes = await fetch(`${process.env.URL}/predmets`);
//     const predmets = await predmetsRes.json();
//     //  надо будет добавить try catch в случае если не получилось загрузку произвести и чтобы хоть что то показывалось 
//     return { 
//         props: { 
//             physics,
//             predmets
//         }
//     }
//   }

export default function Psysics({ physics , predmets }) {

    return (
        <>
            <Header titlePage={'Главная'} />
            <div className="mt-7vh flex flex-col justify-center items-center h-93vh w-100vw">
                <div className="bg-blue-300 w-2/3 h-1/5 mb-5">
                    <h1>{physics?.description}</h1>
                </div>
                <div className="w-2/3 h-2/3">
                    {/* <PredmetSwiper predmetsArray={predmets}/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
