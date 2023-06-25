'use client'
import { motion } from 'framer-motion';

const TextBlock = ({ text } : { text: string}) => {

  const textArray = text.split('');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='font-medium text-lg'
    >
      {textArray.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default TextBlock;