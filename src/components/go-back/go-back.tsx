import Link from "next/link";
import Image from "next/image";
import LoggoBack from '@/assets/back.svg'

interface Props {
    linkBack: string
}

const GoBack = ({ linkBack }: Props) => {
    return (
        <div className="hover:scale-150 duration-300">
        <Link href={`/${linkBack}`}>
            <Image src={LoggoBack} alt={'go back'}/>
        </Link>
        </div>
    );
};

export default GoBack;