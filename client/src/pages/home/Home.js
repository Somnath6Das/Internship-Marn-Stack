import React, { useState } from 'react';
import "./home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import Tables from '../../components/tables/Tables';
import Spiner from './../../components/spiner/Spiner';



const Home = () => {

  const [ showSpinner, setShowSpinner ] = useState(true);

  const navigate = useNavigate();
  const addUser = () => {
    navigate("/register")
  }

  return (
    <div className='home'>
      <div className="main_div">
        <div className="search_add mt-4 d-flex justify-content-between" >
          <div className="search col-lg-4">
            <Form className="d-flex" style={{ marginLeft: "124px", maxWidth: "300px" }}>
              <Form.Control
                type="search"
                placeholder="Search user name"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><i class="fa-solid fa-magnifying-glass"></i></Button>
            </Form>
          </div>
          <div className="add_btn">
            <Button variant="primary" onClick={addUser}><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Add User</Button>
          </div>
        </div>   
        <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
          <div >
            <Dropdown >
              <Dropdown.Toggle className="filter_new_old" id="dropdown-basic">
                <i class="fa-solid fa-arrow-down-z-a"></i>&nbsp;
                Short by Value
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='menu'>New to Old</Dropdown.Item>
                <Dropdown.Item className='menu'>Old to New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="filter">
            <h5>Filter By Gender</h5>
            <div className="gender d-flex justify-content-between" >
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`All`}
                name="gender"
                value={"All"}
                defaultChecked
              />
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`Male`}
                name="gender"
                value={"Male"}
              />
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`Female`}
                name="gender"
                value={"Female"}
              />
            </div>
          </div>

          <div className="filter">
            <h5>Filter By Status</h5>
            <div className="gender d-flex justify-content-between" >
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`All`}
                name="status"
                value={"All"}
                defaultChecked
              />
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`Active`}
                name="status"
                value={"Active"}
              />
              <Form.Check style={{ marginRight: "20px" }}
                type={'radio'}
                label={`Inactive`}
                name="status"
                value={"Inactive"}
              />
            </div>
          </div>
          <div className="export_csv">
            <Button className='export_btn'><i class="fa-solid fa-file-csv"></i>&nbsp;&nbsp;<span>Save to Excel File</span></Button>
          </div>
        </div>
        <div className="spinner">
          {showSpinner ? <Spiner /> : <Tables />}
        </div>
      </div>
    </div>
  );
}

export default Home;