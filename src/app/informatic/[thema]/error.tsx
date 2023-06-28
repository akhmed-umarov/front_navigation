'use client'
import { useRouter } from 'next/navigation'

const Error = ({error}: {error: Error}) => {
    const router = useRouter()

    return (
        <div onClick={()=>router.back()}>
            <h1>Такой темы не существует</h1>
            <h2>{error.message}</h2>
        </div>
    );
};

export default Error;