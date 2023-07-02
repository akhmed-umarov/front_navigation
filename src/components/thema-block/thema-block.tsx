import React from 'react';
import Image from 'next/image';
import { API_URL } from '@/http';

const ThemaBlock = ({ description, imgUrl }: { description: string, imgUrl: string }) => {
    console.log(imgUrl);
    return (
        <div className='flex justify-center items-center m-3'>
            <p>{description}</p>
            {imgUrl == '' || imgUrl == undefined ? null :
            <Image width={100} height={100} alt='Изображение темы'  src={`${API_URL}/uploads/${imgUrl}`} />
            }
        </div>
    );
};

export default ThemaBlock;