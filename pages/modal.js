// components/CustomModal.js
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

const CustomModal = ({ isOpen, closeModal, content }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
        >
            <div>
                <button onClick={closeModal}>Закрыть</button>
                {content}
            </div>
        </ReactModal>
    );
};

export default CustomModal;