import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Header from '../components/Header';
import { Reading } from '../components/Reading';

const HomePage = () => {
    return (
        <Container>
            <Header />
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Reading/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HomePage;