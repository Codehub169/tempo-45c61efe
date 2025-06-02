import { motion } from 'framer-motion';
import Image from 'next/image';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ServiceItem = ({ icon, title, microcopy }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-hueneu-neutral-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="relative w-16 h-16 mb-4">
        <Image src={icon} alt={`${title} icon`} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-hueneu-primary mb-2">{title}</h3>
      <p className="text-sm text-hueneu-neutral-dark font-body flex-grow">{microcopy}</p>
    </motion.div>
  );
};

export default ServiceItem;
