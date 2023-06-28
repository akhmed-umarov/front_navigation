import type { IPredmet } from "@/types/IPredmet";
import { Header } from "@/components/header/header";
import { Metadata } from "next/types";

const getOneThemaInformatic = async (thema: string) => {
    const response = await fetch(`${process.env.URL}/informatic/${thema}`)
    if (!response.ok) {
        throw new Error("Такой страницы нет!");
    }
    return await response.json()
}

const getInformaticPredmet = async () => {
    const response = await fetch(`${process.env.URL}/informatic`)
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
    const thema = await getOneThemaInformatic(params.thema)
    console.log(thema);
    return (
        <div>
            <Header titlePage={thema.title} backMode={true} backLink="informatic" />
            <main className=" mt-16">
                <h1>Thema Informatic {thema.link} </h1>
            </main>
        </div>
    );
};

export default ThemaPage;