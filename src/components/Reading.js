import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
} from 'reactstrap';
import { TarotCard } from './TarotCard';
import { CARDSDATA } from '../shared/CARDSDATA';

import { selectCardImageById } from '../redux/cardsSlice';

export const Reading = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const randomCard = CARDSDATA[Math.floor(Math.random() * (CARDSDATA.length))]; //need to rewrite this to exclude CARDSDATA[0]
    const cardBack = useSelector(selectCardImageById(0));

    return (
        <Container>
            <Card inverse >
                <CardImg width="100%" src={cardBack.image} alt={cardBack.name} style={{opacity: '0.8'}}/>
                <CardImgOverlay>
                    <CardBody>
                        <button
                            className='pullCardButton'
                            onClick={() => setModalOpen(true)}
                        >
                            Pull a card
                        </button>
                    </CardBody>
                </CardImgOverlay>
            </Card>

            <Modal isOpen={modalOpen} fullscreen>
                <Container className='readingContainer'>
                <ModalHeader >
                    <Button
                        className='closeButton'
                        onClick={() => setModalOpen(false)}
                    > go back
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <TarotCard
                        name={randomCard.name}
                        id={randomCard.id}
                        description={randomCard.description} />
                </ModalBody>
                </Container>
            </Modal>
        </Container>
    )
};

