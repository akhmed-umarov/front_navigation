'use client'
import GoBack from "./go-back/go-back"
import Navbar from "./navbar/navbar"

// async function getData() {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//         cache: 'force-cache'
//     })
//     return responce.json()
// }

type Props = {
    navbarMode?: boolean
    navbarClick?: () => void
    backMode?: boolean
    backClick?: () => void
    titlePage: string
}

//async так как сервак
export const Header = ({ navbarMode = false, navbarClick = () => { console.log('navbar') }, titlePage, backMode = false, backClick = () => { console.log('back') } }: Props) => {
    // const data = await getData()
    // console.log(data);
    return (
        <header className="flex fixed top-0 left-0 h-7vh w-100vw bg-blue-300 flex-row justify-between items-center px-5">
            <div className={`${navbarMode ? '' : 'opacity-0'} w-5 h-5 bg-white`}>
                <Navbar/>
                {/* не забыть добавить клиентский компоент вместо  */}
                <h1 onClick={navbarClick}>Na</h1>           
            </div>
            <div className="text-xl">
                {titlePage}
            </div>
            <div className={`${backMode ? '' : 'opacity-0'} w-5 h-5 bg-white`}>
                <GoBack linkBack="home"/>
                {/* не забыть добавить клиентский компоент вместо  */}
                <h1 onClick={backClick}>Ba</h1>
            </div>
        </header>
    )
}