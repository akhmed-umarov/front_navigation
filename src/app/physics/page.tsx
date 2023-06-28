import { Footer } from "@/components/footer"
// import { Header } from "@/components/header/header"
// import type { IPredmet, ISimplePredmet } from "@/types/IPredmet";

export const metadata = {
    title: 'Физика'
}

// async function getDataPhysics() {
//     const res = await fetch(`${process.env.URL}/physics`, { cache: 'force-cache' });
//     return await res.json() as IPredmet;
// }

// async function getDataPredmets() {
//     const predmetsRes = await fetch(`${process.env.URL}/predmets`);
//     return await predmetsRes.json() as ISimplePredmet[];

// }

export default async function Psysics() {
    // const physics = await getDataPhysics()
    // const predmets = await getDataPredmets()

    return (
        <>
            {/* <Header titlePage={'Главная'} /> */}
            <div className="mt-7vh flex flex-col justify-center items-center h-93vh w-100vw">
                <div className="bg-blue-300 w-2/3 h-1/5 mb-5">
                    {/* <h1>{physics?.description}</h1> */}
                </div>
                <div className="w-2/3 h-2/3">
                    {/* <PredmetSwiper predmetsArray={predmets}/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
