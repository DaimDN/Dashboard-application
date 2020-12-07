import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../img/Capture.PNG';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing container'>
      <div className='dark-overlay'>
        <div className='landing-inner'>

        <div className="row">
          <div className="col-7">
          <div style={{marginTop: '16vh'}}>
          <img style={{width: '70%'}} src="https://www.jpmorgan.com/content/dam/shared/logos/logos-cb-jpm.svg"
      alt="" />
     
         
          <p style={{fontSize: '20px'}} className=''>
            This Application is a Sole Property of Daim. 
          </p>
         <hr/>
        
         
       

          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            
          </div>
          </div>
          </div>
          <div className="col-5">
            
          <img style={{borderRadius: '50%', width: '400px', height: '400px'}}
            src={Logo}
            alt= ""
          />
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
