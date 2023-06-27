import React from 'react';
import { Modal, Container, Form, Button } from 'react-bootstrap';

class ModalForm extends React.Component {
  render() {
    const { showModal, closeModal, handleSubmit } = this.props;

    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="formContainer">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Who are you interview</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="topic">
                <Form.Label>What are the key topics or areas of interest associated with the subject and the interview you want to conduct?</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="goal">
                <Form.Label>What is the goal or objective of your interview? Please explain the purpose and the specific outcome you hope to achieve.</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button type="submit" onClick={closeModal}>Submit</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalForm;
