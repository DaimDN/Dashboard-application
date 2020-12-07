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
    <div class="w3-animate-zoom">
    <DashSide/>
     <h2 style={{fontWeight: '700'}}>
     <div className="row">
       <div className="col-9"> <img style={{width: '40%'}} src="https://www.jpmorgan.com/content/dam/shared/logos/logos-cb-jpm.svg"
      alt="" /> </div>
      <div className="col-3">
      <div style={{marginTop: '-20px'}}> 
     <h4 
     style={{fontSize: '38px', fontWeight: '400', fontFamily: 'Ubuntu, sans-serif', color: '#503629'}}
      className=""> <Clock format={"h:mm:ss a"} ticking={true} timezone={'Europe/Belfast'} /> </h4>
      </div>
      </div>
     </div>
    
     
     
          </h2>
          <h4 > 
          <Clock format={"dddd, MMMM Do YYYY"} ticking={true} timezone={'Europe/Belfast'} /> </h4>
    <Sidebar />
    <br/>
    <div className="row">

    <div className="col-8">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Current Stock</h4>
                <Chart5/>
               
                </div>
                </div>
    </div>
    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Market</h4>
                <Chart1/>
               
                </div>
                </div>
 
    
    </div>
    </div>
    
    <div className="row">

    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Current Stock</h4>
                <Chart1/>
               
                </div>
                </div>
    </div>
    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Market</h4>
                <Chart2/>
               
                </div>
                </div>
    </div>
    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Pricing</h4>
                <Chart1/>
               
                </div>
                </div>
    </div>

    

    </div>
   
    <div className="row">

    <div className="col-6">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">GDP</h5>
                <h4 class="card-title">JP Morgan</h4>
                <MyChart/>
               
               
                </div>
                </div>
    </div>
    <div className="col-6">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">GDP</h5>
                <h4 class="card-title">JP Morgan</h4>
                <Chart4/>
              
               
                </div>
                </div>
    </div>

 
      
    </div>
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
