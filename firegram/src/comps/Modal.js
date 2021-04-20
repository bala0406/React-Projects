import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(event) =>
                event.target.classList.contains("backdrop")
                    ? setSelectedImage(null)
                    : null
            }
        >
            <motion.img
                src={selectedImage}
                alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
};

export default Modal;
