import Link from "next/link";

interface Props {
    linkBack: string
}

const GoBack = ({ linkBack }: Props) => {
    return (
        <Link href={`/${linkBack}`}>

        </Link>
    );
};

export default GoBack;