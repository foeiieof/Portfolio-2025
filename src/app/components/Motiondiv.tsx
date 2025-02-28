import { motion, MotionProps } from "motion/react"

export const elementStyle = {
  "style1": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], },
  },
  "style2": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style3": {
    initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, delay: 0.4, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style4": {
    initial: { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  },
  "style5": {
    initial: { opacity: 0, scale: 0.3 }, animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay: 0.3, ease: [0, 0.71, 0.2, 1.01], }
  }
}

export const MotionDiv = ({ children, className, ...props }: { children?: React.ReactNode; className: string } & MotionProps) => {
  return <motion.div className={className} {...props}>{children}</motion.div>
}
