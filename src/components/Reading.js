import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { TarotCard } from './TarotCard';
import { CARDSDATA } from '../shared/CARDSDATA';

export const Reading = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const randomCard = CARDSDATA[Math.floor(Math.random() * CARDSDATA.length)];

    return (
        <>
            <Button
                color='danger'
                outline
                size='lg'
                onClick={() => setModalOpen(true)} 
            >
                Pull a card
            </Button>
            <Modal isOpen={modalOpen}> 
                <ModalHeader>
                    <Button
                        color='danger'
                        onClick={() => setModalOpen(false)} 
                    > go back
                    </Button>
                </ModalHeader>
                <ModalBody>
                        <TarotCard 
                            name={randomCard.name} 
                            id={randomCard.id} 
                            description={randomCard.description}/>
                </ModalBody>
            </Modal>
        </>
    )
};

