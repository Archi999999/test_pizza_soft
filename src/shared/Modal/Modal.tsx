import {ReactNode, MouseEvent} from "react";

import style from "./Modal.module.scss";

interface IModal {
    className?: string
    children: ReactNode
    onClose: () => void
    isOpen?: boolean
}

export const Modal = ({className, children, onClose, isOpen = true}: IModal) => {
    if (!isOpen) return null;

    return (
        <div role={'presentation'} className={style.overlay} onClick={onClose}>
            <div role={'presentation'} className={`${style.modal} ${className}`} onClick={(e)=> e.stopPropagation()}>
                <div className={style.top_modal}>
                    <button onClick={onClose} className={style.close_btn}>❌</button>
                </div>
                <hr className={style.line}/>
                {children}
            </div>
        </div>
    );
};
