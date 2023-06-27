import type { IPredmet, ISimplePredmet } from "@/types/IPredmet";
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Navbar from "@/components/navbar/navbar"
import Link from "next/link"
import RoundedBlock from "@/components/rounded-block/rounded";


export const metadata = {
    title: 'Информатика'
}
// themas: Omit<IThemas, "body" | "predmet" | "imgUrl">[];
// description: string;
// imagUrl: string;
// title: string;

// predmet: PredmetName;
// description: string;
// imgUrl: string;
// title: string;

async function getDataInformatic() {
    const res = await fetch(`${process.env.URL}/informatic`, { cache: 'force-cache' });
    return await res.json() as IPredmet;
}

async function getDataPredmets() {
    const predmetsRes = await fetch(`${process.env.URL}/predmets`);
    return await predmetsRes.json() as ISimplePredmet[];
}

export default async function InformaticPage() {

    // const informatic = await getDataInformatic()
    const predmets = await getDataPredmets()
    const informatic: IPredmet = {
        title: 'Информатика',
        themas: [{
            title: 'Информатика 1 класс',
            description: 'фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв'
        }, {
            title: 'Информатика 2 класс',
            description: 'фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв'
        } , {
            title: 'Информатика 3 класс',
            description: 'фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв'
        }, {
            title: 'Информатика 4 класс',
            description: 'фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв'
        }, {
            title: 'Информатика 5 класс',
            description: 'фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв фывфывфыв'
        }],
        description: 'Описание предмета',
        imagUrl: ''
    }

    return (
        <>
            <Navbar>
                <nav className="flex flex-col w-full h-full justify-center items-center">
                    {predmets.map(predmet => (
                        <Link href={`/${predmet.link}`} key={predmet.title}>
                            <div className=" my-8 font-semibold " >
                                <h2>{predmet.title}</h2>
                            </div>
                        </Link>
                    ))}
                </nav>
            </Navbar>
            <Header navbarMode={true} titlePage={informatic.title} />
            <div className="mt-7vh flex flex-col justify-center items-center h-93vh w-100vw">
                <div className="bg-blue-300 w-3/4 h-1/6 mb-5">
                    <h1>{informatic?.description}</h1>
                </div>
                <div className="w-5/6 justify-center h-2/3 flex flex-wrap">
                    {informatic.themas.map((thema)=>(
                        <RoundedBlock key={thema.title} title={thema.title} description={thema.description}/>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
