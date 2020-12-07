import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Sidebar from './sidebar';
import Chart1 from './charts/chart1';
import Chart2 from './charts/chart2';
import MyChart from './charts/chart3';
import Chart4 from './charts/chart4';
import Clock from 'react-live-clock';
import DashSide from './DashSide';
import Verticalnavbar from './verticalnavbar';
import Footer from './footer';
import Chart5 from './charts/chart5';
import Tabs from './tabs/tabs';



const Dashboard = ({
  getCurrentProfile,
  auth: { user, isAuthenticated }, logout,
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

 

  return (
    <Fragment>
    <div class="w3-animate-opacity">
    <DashSide/>
     <h2 style={{fontWeight: '700'}}>
     <div className="row ">
       <div className="col-9"> <img style={{width: '40%'}} src="https://www.jpmorgan.com/content/dam/shared/logos/logos-cb-jpm.svg"
      alt="" /> </div>
      <div className="col-3">
      <div style={{marginTop: '-20px'}}> 
     <h4 
     style={{fontSize: '38px', fontWeight: '500', fontFamily: 'Ubuntu, sans-serif'}}
      className=""> <Clock format={"h:mm:ss a"} ticking={true} timezone={'Europe/Belfast'} /> </h4>
      </div>
      </div>
     </div>
</h2>
    
     
     
      
  
    <Tabs/>
    
    
   
    

 

    <Footer/>
      
      </div>
    
      {profile !== null ? (
        <Fragment>
         
         
        </Fragment>
      ) : (
        <Fragment>
          
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  Dashboard
);
