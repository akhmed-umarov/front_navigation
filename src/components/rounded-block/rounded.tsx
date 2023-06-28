import Link from "next/link"

interface Props { 
    title: string , 
    description: string ,
    link: string
}
const RoundedBlock = ({title , description , link }:Props ) => {
    return (
        <div className="duration-300 hover:shadow-sm hover:scale-125 m-2 flex justify-center items-center rounded-full bg-blue-500 w-32 h-32 xl:w-25vw xl:h-20vh shadow-xl" key={title}>
            <Link href={`${link}`}>
            <p className="hover:text-blue-900 text-blue-50 text-xs text-center">{title}</p>       
            </Link>
        </div>
    );
};

export default RoundedBlock;