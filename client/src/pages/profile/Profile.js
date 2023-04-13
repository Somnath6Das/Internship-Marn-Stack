import React,{useState, useEffect} from 'react';
import "./profile.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Spiner from './../../components/spiner/Spiner';

const Profile = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {  
    setTimeout(() => {
      setShowSpinner(false);
    }, 1200)
  }, [])
  return (
    <>
     {showSpinner ? <div className="spinner" style={{marginTop:"15%"}}>
      <Spiner /></div>:<div className='profile'>
      <div className="card-profile shadow col-lg-6 mx-auto mt-5">
        <Card>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-state d-flex justify-content-center'>
                  <img src="/selfie.png" alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Somnath Das</h3>
              <h4><i className="fa-solid fa-at"></i>&nbsp; <span>somnath8das@gmail.com</span></h4>
              <h4><i className="fa-solid fa-mobile-screen-button"></i>&nbsp; <span>9681271004</span></h4>
              <div className="profileInfo">
                <h4><i className="fa-solid fa-user"></i>&nbsp; <span>Male</span></h4>
                <h4><i className="fa-solid fa-location-arrow"></i>&nbsp; <span>Kolkata</span></h4>
                <h4><i className="fa-solid fa-bolt"></i>&nbsp; <span>Active</span></h4></div>
              <div className="profileInfo1">
                <h4><i className="fa-regular fa-calendar-plus"></i>&nbsp; <span>created: 1-1-23</span></h4>
                <h4><i className="fa-regular fa-calendar-check"></i>&nbsp; <span>updated: 31-12-23</span></h4>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>}
    </>
 
  )
}

export default Profile;