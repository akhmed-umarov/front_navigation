async function getData() { 
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1" , { 
            cache: 'force-cache'
    })
    return responce.json()
}

export const Header = async ()=>{ 
    const data = await getData()
    console.log(data);
    return ( 
        <header className="flex fixed top-0 left-0 h-7vh w-100vw bg-orange-300">
            
        </header>
    )
}