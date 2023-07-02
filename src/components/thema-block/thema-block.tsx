import React from 'react';
import Image from 'next/image';
import { API_URL } from '@/http';

const ThemaBlock = ({ description, imgUrl }: { description: string, imgUrl: string }) => {
    return (
        <div className='flex flex-col justify-center items-center m-3'>
            <p className='text-justify'>{description}</p>
            {imgUrl == '' || imgUrl == undefined ? null :
            <Image className='rounded-sm w-1/2 h-1/3 my-2' width={100} height={100} alt='Изображение темы'  src={`${API_URL}/uploads/${imgUrl}`} />
            }
        </div>
    );
};

export default ThemaBlock;