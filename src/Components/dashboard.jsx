import { Col, Row } from "react-bootstrap";
import ChartComponent from "./chart"
import Card from 'react-bootstrap/Card';
import { IoIosArrowDroprightCircle } from "react-icons/io";
function Dashboard(){
    return(
        <>
        <Row>
            <Col lg={4}>
            <Card
                style={{
                    width: '26rem',
                    position: 'relative',
                    border: '2px solid #ffc107',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                    padding: '1.3rem'
                }}
                className="bg-dark"
            >
                <Card.Body>
                    <h1 style={{ color: 'yellow' }} className='d-flex justify-content-center align-items-center'>Tap Ameio Token</h1>
                    <Card.Title className='text-white d-flex justify-content-center align-items-center fw-bold'>Will be Launched</Card.Title>
                    <p className='text-white d-flex justify-content-center align-items-center mt-4'>
                         Tap your way through levels filled with exciting
                    </p>
                    <p className='text-white d-flex justify-content-center align-items-center mb-4'>
                        challenges and obstacles
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='fs-100'><IoIosArrowDroprightCircle style={{ color: 'yellow', fontSize: '2rem' }} /></button>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4}>
            <Card
                style={{
                    width: '26rem',
                    position: 'relative',
                    border: '2px solid #ffc107',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                    padding: '1.3rem'
                }}
                className="bg-dark"
            >
                <Card.Body>
                    <h1 style={{ color: 'yellow' }} className='d-flex justify-content-center align-items-center'>Tap Ameio Token</h1>
                    <Card.Title className='text-white d-flex justify-content-center align-items-center fw-bold'>Will be Launched</Card.Title>
                    <p className='text-white d-flex justify-content-center align-items-center mt-4'>
                         Tap your way through levels filled with exciting
                    </p>
                    <p className='text-white d-flex justify-content-center align-items-center mb-4'>
                        challenges and obstacles
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='fs-100'><IoIosArrowDroprightCircle style={{ color: 'yellow', fontSize: '2rem' }} /></button>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4}>
            <Card
                style={{
                    width: '26rem',
                    position: 'relative',
                    border: '2px solid #ffc107',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                    padding: '1.3rem'
                }}
                className="bg-dark"
            >
                <Card.Body>
                    <h1 style={{ color: 'yellow' }} className='d-flex justify-content-center align-items-center'>Tap Ameio Token</h1>
                    <Card.Title className='text-white d-flex justify-content-center align-items-center fw-bold'>Will be Launched</Card.Title>
                    <p className='text-white d-flex justify-content-center align-items-center mt-4'>
                         Tap your way through levels filled with exciting
                    </p>
                    <p className='text-white d-flex justify-content-center align-items-center mb-4'>
                        challenges and obstacles
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='fs-100'><IoIosArrowDroprightCircle style={{ color: 'yellow', fontSize: '2rem' }} /></button>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        <ChartComponent/>
        </>
    )
}
export default Dashboard