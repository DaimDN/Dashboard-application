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
import './dashside.css'




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
   
    <div class="w3-animate-top">
    <div style={{
       fontWeight: '600',
       position: 'fixed',
       width: '100vw',
       right: '0',
       zIndex: '200',
       top: '-10px',
       height: '200vh',
       backgroundColor: 'rgb(0, 0, 0, 0.8)',
       
       
       }}>
      <div style={{
        padding: '30px',
        position: 'absolute',
        zIndex: '600'
      }}>
      <a href="/dashboard">
     <i style={{color: 'white', cursor: 'pointer'}} class="fas fa-2x fa-times-circle"></i>
     </a>
      </div>
       <div className="container" style={{
         position: 'absolute', 
         marginTop: '20vh',
         zIndex: '400', 
         marginLeft: '12%',
         color: 'black'
         
         
         }}>
       
        <div className="row">
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/610/610106.svg"
              style={{width: '20%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white', fontWeight: '800'}}>Dashboard</h5>
          </div>
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/3408/3408591.svg"
              style={{width: '20%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800'}}>Charts</h5>
          </div>
          <div className="col-3 g text-center" > 
          <a href="/graphs">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/2257/2257295.svg"
              style={{width: '20%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800'}}>Graphs</h5>
          </a>
          
          </div>
          <div className="col-3 g text-center" > 
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/1828/1828673.svg"
              style={{width: '20%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800' }}>Projects</h5>
          
          
          </div>
          </div>
          <br/>
          <div className="row" style={{marginTop: '80px'}}>
          <div className="col-6 g mx-auto text-center" > 
          <a href="/settings">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/3861/3861854.svg"
              style={{width: '13%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              
              <h5 className="lead" style={{color: 'white' , fontWeight: '800'}}>Setting</h5>
              </a>
          
          
          </div>
          <div className="col-6 g " > 
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/599/599305.svg"
              style={{width: '13%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 style={{textAlign: 'center'}} className="lead" style={{color: 'white' , fontWeight: '800'}}>Profile</h5>
          </div>
          
          </div>
        </div>

         

        




       



    </div>
    <div style={{zIndex: '300', position:'absolute'}}><DashSide/></div>
    <h2 style={{fontWeight: '700'}}>
     DASHBOARD
     
     
          </h2>
          <h4> 
          <Clock format={"dddd, MMMM Do YYYY, h:mm:ss a"} ticking={true} timezone={'Europe/Belfast'} /> </h4>
    <Sidebar />
    <br/>
    
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
