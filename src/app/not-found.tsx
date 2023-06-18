import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div>
            <h1>Error page</h1>
            <Link href={'/home'}><h2>Перейти на основную страницу</h2></Link>
        </div>
    );
};

export default NotFoundPage;