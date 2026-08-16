import { useRef, useEffect } from "react";

import { createPortal } from "react-dom";

function Modal({ open, children }) {
    const dialog = useRef();

    useEffect(() => {
        if (!dialog.current) {
            return;
        }

        if (open) {
            if (!dialog.current.open) {
                dialog.current.showModal();
            }
        } else {
            if (dialog.current.open) {
                dialog.current.close();
            }
        }
    }, [open]);

    return createPortal(
        <dialog className="modal" ref={dialog}>
            {children}
        </dialog>,
        document.getElementById("modal"),
    );
}

export default Modal;
