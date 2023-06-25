'use client'
import GoBack from "./go-back/go-back"
import NavbarIcon from "./navbar-icon/navbar-icon"

// async function getData() {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//         cache: 'force-cache'
//     })
//     return responce.json()
// }

type Props = {
    navbarMode?: boolean
    backMode?: boolean
    titlePage: string
}

//async так как сервак
export const Header = ({ navbarMode = false , titlePage, backMode = false  }: Props) => {
    // const data = await getData()
    // console.log(data);
    return (
        <header className="flex fixed top-0 left-0 h-7vh w-100vw shadow-2xl rounded-b-xl bg-blue-700 flex-row justify-between items-center px-5">
            <div className={`${backMode ? '' : 'opacity-0'} w-5 h-5 `}>
                <GoBack linkBack="/"/>
            </div>
            <div className="text-xl text-white">
                {titlePage}
            </div>
            <div className={`${navbarMode ? '' : 'opacity-0'}`}>
                <NavbarIcon/>
            </div>
        </header>
    )
}