import { ContactInfo } from '../../components'
import { Form, FormGroup } from 'react-bootstrap';

function ContactForm() {
  return (
    <div className='container my-5'>
            <div className='row '>
                  <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                      <ContactInfo />
                  </div>
                  <div className=' col-lg-6 d-flex justify-content-center'>
                      <Form >
                          <Form.Group className='row mb-3 mt-3'>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                     <Form.Control type='text' id='first-name'  />
                              </div>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                     <Form.Control type='text' id='last-name'  />
                              </div>
                          </Form.Group>

                          <Form.Group className='row mb-3'>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                     <Form.Control type='email' id='email-address' />
                              </div>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='phone'>Phone Number</Form.Label>
                                     <Form.Control type='tel' id='phone'  />
                              </div>
                          </Form.Group>

                          <Form.Group className='row mb-3'>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                     <Form.Control type='date' id='date' />
                              </div>
                              <div className='col-md-6'>
                                    <Form.Label htmlFor='guest-number'>Number of Guest</Form.Label>
                                     <Form.Control type='number' id='guest-number'  />
                              </div>
                          </Form.Group>


                          
                          <Form.Group className='mb-4'>                             
                                    <Form.Label htmlFor='comments'>Comments</Form.Label>
                                     <Form.Control type='textarea' id='comments' />                           
                          </Form.Group>

                          <button type='submit' className='btn btn-success btn-lg'>Submit</button>

                      </Form>
                  </div>
            </div>
        </div>
  )
}

export default ContactForm