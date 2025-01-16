import react, { forwardRef } from 'react';
import "../../public/styles/dialog.css";

const Dialog = forwardRef((props, ref) => {
    const { children, toggleDialog } = props;

    return (
        <dialog ref={ref} onClick={(e) => {
            if (e.currentTarget === e.target){
                toggleDialog();
            }
        }}>
            <div className='dialogWindow'>
                <button onClick={toggleDialog} className='closeButton'>X</button>
                {children}
            </div>
        </dialog>
    );
});

export default Dialog;