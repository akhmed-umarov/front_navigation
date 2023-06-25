// export const getStaticPaths = async ()=>{ 
//     const res = await fetch(`${process.env.URL}/predmets`)
//     const data = await res.json()

//     //нужно передать массив путей для каждого отдельного бургера в формате [ {params: { id: _id}} , ...]
//     const paths = data.map(({title})=>({
//         params: {title}
//     }))

//     return { 
//         paths,
//         fallback: false
//     }

// }

// //  getStaticProps запускается для каждогообъекта внутри paths
// export const getStaticProps = async (context)=> {
//     const title = context.params.title;
    
//     const res = await fetch(`${process.env.URL}/predmet/${title}`);
//     const cupcakes = await res.json();
//     return { 
//         props: { 
//             cupcakes
//         }
//     }
// }


// //любое название
const ThemaPage = () => {
    return (
        <h1>Thema Informatic</h1>
    );
};

export default ThemaPage;