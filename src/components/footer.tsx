async function getData() { 
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1" , { 
            cache: 'no-store'
    })
    return responce.json()
}

export const Footer = async ()=>{ 
    const data = await getData()
    return ( 
        <footer className="flex fixed bottom-0 left-0 h-7vh w-100vw bg-orange-300">

        </footer>
    )
}