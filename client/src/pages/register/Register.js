import React, { useState, useEffect } from 'react';
import "./register.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spiner from './../../components/spiner/Spiner';
import { registerFunc } from '../../services/Apis';


const Register = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [inputData, seInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  });
  // console.log(inputData);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  // status options
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  // set input value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    seInputData({ ...inputData, [name]: value })
  }

  // set status
  const setStatusValue = (e) => {
    setStatus(e.value);
  }
  // console.log(status);

  // set profile
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  }

  // submit user data
  const submitUserData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputData;
    if (fname === "") {
      toast.error("First name is required!",)
    }
    else if (lname === "") {
      toast.error("Last name is required!")
    }
    else if (email === "") {
      toast.error("Enter email address!")
    }
    else if (!email.includes("@")) {
      toast.error("Enter valid email!")
    }
    else if (mobile === "") {
      toast.error("Mobile number is required!")
    }
    else if (mobile.length > 10 || mobile.length < 10) {
      toast.error("Enter 10 digits mobile number!")
    }
    else if (gender === "") {
      toast.error("Gender is required!")
    }
    else if (location === "") {
      toast.error("Location is required!")
    }
    else {
      const data = new FormData();

      data.append("fname", fname);
      data.append("lname", lname); 
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("user_profile", image);
      data.append("location", location); 
   
      const config = {
        "Content-Type": "multipart/form-data"
      }
      const response = await registerFunc(data, config);
      console.log(response);
      // toast.success("Data Submitted!");

    }
  }

  useEffect(() => {
    if (image) {
      setPreviewImage(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpinner(false);
    }, 1200)
  }, [image])


  return (
    <>
    {showSpinner ? <div className="spinner" style={{marginTop:"15%"}}><Spiner/></div>:<div className="register">

      <h2 className='text-center mt-1'>Register Details</h2>
      <Card className='shadow mt-3 p-3'>
        <div className="profile_div text-center">
          <img src={previewImage ? previewImage : "/selfie.png"} alt="img" />
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name='fname' value={inputData.fname} onChange={setInputValue} placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name='lname' value={inputData.lname} onChange={setInputValue} placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' value={inputData.email} onChange={setInputValue} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control type="text" name='mobile' value={inputData.mobile} onChange={setInputValue} placeholder="Enter mobile" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Gender</Form.Label>
           
                <Form.Check
                  type={'radio'}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={'radio'}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={setInputValue}
                />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>User status</Form.Label>
              <Select
                options={options} onChange={setStatusValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select profile picture</Form.Label>
              <Form.Control type="file" onChange={setProfile} name='user_profile' placeholder="Select picture" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control type="text" name='location' value={inputData.location} onChange={setInputValue} placeholder="Enter location" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitUserData}>
              SUBMIT
            </Button>
          </Row>
        </Form>
      </Card>
      <ToastContainer position="top-center" />
    </div>}
    
    </>
  )
}

export default Register;