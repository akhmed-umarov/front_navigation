async function getData() { 
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1" , { 
        next: { 
            revalidate: 30*24*60
        }
    })
    return responce.json()
}

export const Footer = async ()=>{ 
    const data = await getData()
    console.log(data);
    return ( 
        <footer className="flex fixed bottom-0 left-0 h-7vh w-100vw bg-orange-300">
            
        </footer>
    )
}