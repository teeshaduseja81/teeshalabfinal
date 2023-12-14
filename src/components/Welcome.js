import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import bg from '../assets/images/bg.png';
import main from '../assets/images/main.png';

export default function Welcome() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }} className='my-5 container'>
        <div className="row">
          <div className="col-lg-6 my-5">
            <h1 className='fw-bold my-5'>Request  <span style={{ color: '#4040DA' }} className='c'>Callback</span></h1>
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control className='f' type="text" placeholder="John" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='f' type="number" placeholder="00 (123) 456 78 90" />
                  </Form.Group>

                </Form>
              </div>
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control className='f' type="email" placeholder="John@gmail.com" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Looking to (invest in Rs)</Form.Label>
                    <Form.Control className='f' type="number" placeholder="00 (123) 456 78 90" />
                  </Form.Group>

                </Form>
              </div>
            </div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. As per SEBI guidelines, the minimum investment required is ₹50 Lakhs."
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </Form.Group> <br /> <br />
            <Button className='text-white' style={{width:'500px' ,backgroundColor:'#A73A3A' }}  variant="" type="submit">
              Request Callback -->
            </Button>
          </div>
          <div className="col-lg-6">
            <img src={main} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
