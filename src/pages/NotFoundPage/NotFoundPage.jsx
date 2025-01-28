import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold text-success">404</h1>
          <h2 className="mb-3">Oops! Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            variant="success" 
            size="lg" 
            onClick={() => navigate('/')}
          >
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
