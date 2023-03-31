import React,{ useState } from 'react';
import "./register.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';


const Register = () => {
  const [inputData, seInputData] = useState({
    fname : "",
    lname : "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  });
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  
  // status options
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  return (
    <div className="register">
      <h2 className='text-center mt-1'>Register Details</h2>
      <Card className='shadow mt-3 p-3'>
        <div className="profile_div text-center">
          <img src="/selfie.png" alt="img" />
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name='fname' placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name='lname' placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control type="text" name='mobile' placeholder="Enter mobile" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Gender</Form.Label>
              <Form.Check
                type={'radio'}
                label={`Male`}
                name="gender"
                value={"Male"}
              />
              <Form.Check
                type={'radio'}
                label={`Female`}
                name="gender"
                value={"Female"}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>User status</Form.Label>
              
              <Select
                options={options}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select profile picture</Form.Label>
              <Form.Control type="file" name='user_profile' placeholder="Select picture" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter location</Form.Label>
              <Form.Control type="text" name='location' placeholder="Enter location" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default Register