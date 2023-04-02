import React from 'react';
import './table.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Tables = () => {
  return (
    <div>
      <div className="container">
        <Row>
          <div className='col mt-0'>
            <Card className='shadow'>
              <Table className='align-align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className="table">
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
                    <td className='d-flex align-items-center'>
                      {/* Drop down */}
                    </td>
                    <td></td>
                    <td></td>
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