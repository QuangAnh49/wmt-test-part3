import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";

interface ModalData {
  img: string;
  name: string;
  description: string;
}

interface CarouselModalProps {
  modalData: ModalData | null;
  closeModal: () => void;
  isOpen: boolean;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ modalData, closeModal, isOpen }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the modal to close it
  const handleClickOutside = (e: React.MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-500/40 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClickOutside}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            ref={containerRef}
          >
            <button
              className="absolute cursor-pointer top-2 right-2 text-2xl font-bold text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
            <img
              src={modalData?.img}
              alt="Product Image"
              className="rounded-lg mx-auto w-full mb-4"
            />
            <h3 className="text-lg font-semibold">{modalData?.name}</h3>
            <p className="text-gray-600">{modalData?.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarouselModal;
