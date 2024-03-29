import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { Reading } from '../components/Reading';

const HomePage = () => {
    return (
            <Container className='pageContainer'>
                <Row>
                    <Col className='text-center'>
                        <Reading/>
                    </Col>
                </Row>
            </Container>
    );
};

export default HomePage;