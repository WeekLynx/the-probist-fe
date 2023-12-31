import React from 'react';
import { Modal, Container, Form, Button } from 'react-bootstrap';

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      topic: '',
      goal: '',
      tone: '',
      questions: '',
      email: '',
    };
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, topic, goal, tone, question, email } = this.state;
    const formData = {
      name,
      topic,
      goal,
      tone,
      question,
      email,
    };
    this.props.handleSubmit(formData);
    this.setState({
      name: '',
      topic: '',
      goal: '',
      tone: '',
      questions: '',
      email: '',
    });
  };

  handleDelete = () => {
    this.setState({
      name: '',
      topic: '',
      goal: '',
      tone: '',
      questions: '',
      email: '',
    });
  };

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
                <Form.Label>Who are you interviewing?</Form.Label>
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
              <Form.Group controlId="tone">
                <Form.Label>Please select the tone you want the questions.</Form.Label>
                <Form.Select aria-label="select tone">
                  <option>Select the tone of the questions</option>
                  <option value="neutral">Neutral</option>
                  <option value="empathic">Empathic </option>
                  <option value="curious">Curious</option>
                  <option value="rhetorical">Rhetorical</option>
                  <option value="aggressive">Aggressive</option>
                </Form.Select>
              </Form.Group>
              {/* <Form.Group controlId="question">
                <Form.Label>If you'd like please add a few specific questions for this interview separated by a semi-colon ( ; ).</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group> */}
              <Button type="submit" onClick={closeModal}>Submit</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalForm;
