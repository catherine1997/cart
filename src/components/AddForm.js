import React from 'react';

import { Form, Button} from 'react-bootstrap';

function AddForm() {
  return (
 
    <div>
      <Form>
        <Form.Group>
          <Form.Control 
               type='text'
               placeholder='Name'
               required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control 
               type='email'
               placeholder='Email'
               required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control 
               as='textarea'
               placeholder='Address'
               rows={3}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control 
               type='text'
               placeholder='Phone'
               required
          />
        </Form.Group>

        <Button Variant='success' type='submit' block>
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default AddForm;