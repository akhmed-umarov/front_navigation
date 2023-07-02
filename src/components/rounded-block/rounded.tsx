import Link from "next/link"
import Image from "next/image"
import { API_URL } from "@/http"

interface Props {
    title: string,
    link: string,
    iconUrl: string
}
const RoundedBlock = ({ title, iconUrl, link }: Props) => {
    return (
        <div>
            <div className="m-2 flex justify-center items-center rounded-full bg-blue-500 w-32 h-32 xl:w-25vw xl:h-20vh shadow-xl" key={title}>
                <Link href={`${link}`} className="flex justify-center items-center">
                    <Image alt='иконка темы' className="rounded-full duration-300 hover:shadow-sm hover:scale-125 " width={50} height={50} src={`${API_URL}/uploads/${iconUrl}`}/>
                </Link>
            </div>
            <p className="text-blue-900 text-xs text-center">{title}</p>
        </div>

    );
};

export default RoundedBlock;