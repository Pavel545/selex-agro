import { motion } from 'framer-motion';

// Простое появление
export const FadeIn = ({ children, delays = 0,className }) => (
  <motion.div
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, opacity: 1 }}
    transition={{ 
      duration: 2, 
      delay:delays
    }}
    className={className ? className :''}

  >
    {children}
  </motion.div>
);

// Появление с движением
export const SlideIn = ({ children, delays = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay:delays
    }}
    className={className ? className :''}
  >
    {children}
  </motion.div>
);


export const MoveLeft = ({ children, delays = 0, className, style }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.6, 
      delay:delays
    }}
    className={className ? className :''}
    style={style ? style :''}
    
  >
    {children}
  </motion.div>
);


export const MoveRight = ({ children, delays = 0, className, style }) => (
  <motion.div
    initial={{ opacity: 0, x:  50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.6, 
      delay:delays
    }}
    className={className ? className :''}
    style={style ? style :''}
    
  >
    {children}
  </motion.div>
);

