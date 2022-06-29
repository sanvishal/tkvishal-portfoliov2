import { motion } from 'framer-motion';

export const GradiantBg = () => {
  const timeOffset = 6;
  const [minOpacity, maxOpacity] = [0, 0.8];
  return (
    <>
      <motion.div
        className="gradiant-bg"
        animate={{ opacity: [minOpacity, maxOpacity] }}
        transition={{
          ease: 'linear',
          duration: timeOffset,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: timeOffset * 2,
        }}
      ></motion.div>
      <motion.div
        className="gradiant-bg gradiant-bg-comp"
        style={{ transform: 'rotate(180deg)' }}
        animate={{ opacity: [maxOpacity, minOpacity] }}
        transition={{
          delay: timeOffset,
          ease: 'linear',
          duration: timeOffset,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: timeOffset * 2,
        }}
      ></motion.div>
    </>
  );
};
