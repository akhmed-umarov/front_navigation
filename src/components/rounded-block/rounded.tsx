interface Props { 
    title: string , 
    description: string
}
const RoundedBlock = ({title , description }:Props ) => {
    return (
        <div className="m-2 flex justify-center items-center rounded-full bg-blue-500 w-32 h-32 xl:w-25vw xl:h-20vh shadow-xl" key={title}>
            <p className=" text-xs text-center">{title}</p>       
        </div>
    );
};

export default RoundedBlock;