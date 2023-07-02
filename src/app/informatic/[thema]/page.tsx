import type { IPredmet } from "@/types/IPredmet";
import { Header } from "@/components/header/header";
import { Metadata } from "next/types";
import ThemaBlock from "@/components/thema-block/thema-block";
import IThema from "@/types/IThemas";

const getOneThemaInformatic = async (thema: string) => {
    const response = await fetch(`${process.env.URL}/informatic/${thema}` , {
        cache: 'force-cache'
    })
    if (!response.ok) {
        throw new Error("Такой страницы нет!");
    }
    return await response.json()
}

const getInformaticPredmet = async () => {
    const response = await fetch(`${process.env.URL}/informatic` )
    return await response.json()
}

export async function generateStaticParams() {
    const informatic: IPredmet = await getInformaticPredmet()
    return informatic.themas.map((thema) => ({
        slug: thema.link
    }))
}

export async function generateMetadata({ params }: { params: { thema: string } }): Promise<Metadata> {
    return {
        title: params.thema
    }
}

const ThemaPage = async ({ params }: { params: { thema: string } }) => {
    const thema = await getOneThemaInformatic(params.thema) as IThema
    return (
        <div>
            <Header titlePage={thema.title} backMode={true} backLink="informatic" />
            <main className=" mt-16">
                {thema.description.map((str , index)=>( 
                    <ThemaBlock description={str} imgUrl={thema.imgUrl[index]} key={index}/>
                ))}
            </main>
        </div>
    );
};

export default ThemaPage;