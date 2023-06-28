'use client'
import styled from './header.module.scss'
import GoBack from "../go-back/go-back"
import NavbarIcon from "../navbar-icon/navbar-icon"

// async function getData() {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//         cache: 'force-cache'
//     })
//     return responce.json()
// }

type Props = {
    navbarMode?: boolean
    backMode?: boolean
    backLink?: string
    titlePage: string
}

//async так как сервак
export const Header = ({ navbarMode = false, titlePage, backMode = false, backLink = 'home' }: Props) => {
    // const data = await getData()
    // console.log(data);
    return (
        <header className={styled.header}>
            <div className={styled.header_contain}>
                <div className={`${backMode ? '' : 'hidden'}`}>
                    <GoBack linkBack={backLink} />
                </div>
            </div>
            <div className="text-xl text-white">
                {titlePage}
            </div>
            <div className={`${navbarMode ? '' : 'opacity-0'}`}>
                <NavbarIcon />
            </div>
        </header>
    )
}