import React from 'react';
import "./home.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='home'>
      <div className="main_div">
        <div className="search_add mt-4 d-flex justify-content-between" >
          <div className="search col-lg-4">
            <Form className="d-flex" style={{marginLeft: "124px", maxWidth:"300px"}}>
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
            <Button variant="primary"><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;<span>Add User</span></Button>
          </div>
        </div>
        <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
          <div className="export_csv">
            <Button className='export_btn'><i class="fa-solid fa-file-csv"></i>&nbsp;&nbsp;<span>Save to Excel File</span></Button>
          </div>
        
            <div className="filter">
              <h4>Filter By Gender</h4>
              <div className="gender d-flex justify-content-between" >
              <Form.Check style={{marginRight: "20px"}}
                  type={'radio'}
                  label={`All`}
                  name="gender"
                  value={"Male"}
                  defaultChecked
                />
              <Form.Check style={{marginRight: "20px"}}
                  type={'radio'}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                 
                />
              <Form.Check style={{marginRight: "20px"}}
                  type={'radio'}
                  label={`Female`}
                  name="gender"
                  value={"Female"}                  
                />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;