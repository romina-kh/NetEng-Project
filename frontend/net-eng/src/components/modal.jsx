import { useState } from "react";
import styles from "../styles/modal/modal.module.css";

export default function Modal({ open, title, message, onClose }) {
    const [closing, setClosing] = useState(false);

    if (!open && !closing) return null;

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 300);
    };

    return (
        <div
            className={`${styles.overlay} ${closing ? styles.closing : ""}`}
            onClick={handleClose}
        >
            <div
                className={`${styles.modal} ${closing ? styles.closing : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h3>{title}</h3>
                <p>{message}</p>

                <button onClick={handleClose}>بستن</button>
            </div>
        </div>
    );
}
