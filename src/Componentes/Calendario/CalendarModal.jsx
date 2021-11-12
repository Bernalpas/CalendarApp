

import React from 'react';
import Modal from 'react-modal';
import './modal.css';


Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const CalendarModal = () => {

    const [isOpen, setIsOpen] = React.useState(true);
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={ isOpen }
            //onAfterOpen={ afterOpenModal }
            onRequestClose={ closeModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 400 }
        >
            <h2>Soy un Modal</h2>
            <hr></hr>
            <h2>Datos</h2>
        </Modal>
    )
}

export default CalendarModal;
