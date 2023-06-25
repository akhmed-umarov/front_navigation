'use client'
import { motion } from "framer-motion";
import './text-block.scss'

interface TextBlockProps {
    text: string
}

const TextBlock = ({ text }: TextBlockProps) => {
    const textVariants = {
        offscreen: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    };
    return (
        <motion.section className='text-block'
            variants={textVariants}>
            <p>{text}</p>
        </motion.section>
    );
};

export default TextBlock;