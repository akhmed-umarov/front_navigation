import type { IPredmet } from "@/types/IPredmet";
import { Footer } from "@/components/footer"
import { Header } from "@/components/header/header"
import Navbar from "@/components/navbar/navbar"
import Link from "next/link"
import RoundedBlock from "@/components/rounded-block/rounded";


export const metadata = {
    title: 'Информатика'
}

async function getDataInformatic() {
    const res = await fetch(`${process.env.URL}/informatic`, { cache: 'no-cache' });
    return await res.json() as IPredmet;
}

// async function getDataPredmets() {
//     const predmetsRes = await fetch(`${process.env.URL}/predmets`);
//     return await predmetsRes.json() as ISimplePredmet[];
// }

export default async function InformaticPage() {

    // const predmets = await getDataPredmets()
    const informatic = await getDataInformatic()

    return (
        <>
            <Navbar>
                <nav className="flex flex-col w-full h-full justify-center items-center">
                    {informatic.themas.map((thema) => (
                        <Link href={`/informatic/${thema.link}`} key={thema.title}>
                            <div className=" my-3 font-semibold " >
                                <h2>{thema.title}</h2>
                            </div>
                        </Link>
                    ))}
                </nav>
            </Navbar>
            <Header backMode={true} navbarMode={true} titlePage={informatic.title} />
            <div className="mt-7vh flex flex-col justify-center items-center h-93vh w-100vw">
                <div className="bg-blue-300 w-3/4 h-1/6 mb-5">
                    <h1>{informatic?.description}</h1>
                </div>
                <div className="w-5/6 justify-center h-2/3 flex flex-wrap">
                    {informatic.themas.map((thema) => (
                        <RoundedBlock link={`informatic/${thema.link}`} key={thema.title} title={thema.title} iconUrl={thema.iconUrl} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
