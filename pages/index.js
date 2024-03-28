import { useState } from 'react';
import CustomModal from './modal';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>Главная страница</h1>
            <p>ФИО: Литвинов А.Ю., Пантелеев И.А.</p>
            <p>Группа: 20ВВП1</p>
            <button onClick={openModal}>Открыть модальное окно</button>
            <CustomModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                content={<p>Содержимое модального окна...</p>}
            />
        </div>
    );
}