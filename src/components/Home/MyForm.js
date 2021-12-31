import { Form, Dropdown, Container } from 'react-bootstrap';
import './MyForm.css';

const MyForm = () => {
  return (
    <Container className="mt-5">
      <div className="dropdown-plus-form">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Search for Job Owner"
              id="home-search-form"
            />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default MyForm;
