import Link from "next/link";
import { Button } from "@chakra-ui/react";

interface Props {
    linkBack: string,
    isLast: boolean
}

const GoNext = ({ linkBack, isLast = false }: Props) => {
    return (
        <div className="hover:scale-150 duration-300">
            <Link href={`/${linkBack}`}>
                <Button>{!isLast ? 'Перейти на следующую тему' : 'Выбор предмета'}</Button>
            </Link>
        </div>
    );
};

export default GoNext;