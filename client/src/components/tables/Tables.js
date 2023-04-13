import React from 'react';
import './table.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';

const Tables = () => {
  return (
    <div>
      <div className="container">
        <Row>
          <div className='col mt-0'>
            <Card className='shadow'>
              <Table className='align-align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className="table" id='table1'>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email adress</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile Picture</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='tbody'>
                  <tr>
                    <td>1</td>
                    <td>Somnath Das</td>
                    <td>somnath8das@gmail.com</td>
                    <td>M</td>
                    <td className='align-align-items-center'>
                      <Dropdown id="drp-itm">
                        <Dropdown.Toggle className="filter_new_old" id="dropdown-basic">
                          <Badge id="badge">
                            Active&nbsp;<i className="fa-sharp fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className='menu'>Active</Dropdown.Item>
                          <Dropdown.Item className='menu'>Inactive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/selfie.png" style={{ width: "40px" }} alt="" />
                    </td>
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic">
                          
                             <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >View</Dropdown.Item>
                          <Dropdown.Item >Profile</Dropdown.Item>
                          <Dropdown.Item >Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                  
                  </tr>
                </tbody>
                <tbody className='tbody'>
                  <tr>
                    <td>1</td>
                    <td>Somnath Das</td>
                    <td>somnath8das@gmail.com</td>
                    <td>M</td>
                    <td className='align-align-items-center'>
                      <Dropdown id="drp-itm">
                        <Dropdown.Toggle className="filter_new_old" id="dropdown-basic">
                          <Badge id="badge">
                            Active&nbsp;<i className="fa-sharp fa-solid fa-angle-down"></i>
                          </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className='menu'>Active</Dropdown.Item>
                          <Dropdown.Item className='menu'>Inactive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/selfie.png" style={{ width: "40px" }} alt="" />
                    </td>
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic">                      
                             <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >View</Dropdown.Item>
                          <Dropdown.Item >Profile</Dropdown.Item>
                          <Dropdown.Item >Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                  
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Tables;