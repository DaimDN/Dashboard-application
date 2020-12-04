import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
   <Fragment>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li class="nav-item">
                <a class="nav-link" style={{fontSize: '13px', fontWeight: '800'}} href="/">Dashboard</a>
              </li>

    <li class="nav-item">
                <a class="nav-link" style={{fontSize: '13px', fontWeight: '800'}} href="/">Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{fontSize: '13px', fontWeight: '800'}} href="/">Commons</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{fontSize: '13px', fontWeight: '800'}} href="/">Graphs</a>
              </li>


    <li class="nav-item">
                <a class="nav-link" href="/">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                  
                    <span class="d-lg-none d-md-block">Dashboard</span>
                  
                </a>
              </li>
            
             
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                 
                  <p>
                  <i class="now-ui-icons ui-1_zoom-bold"></i>
                  </p>
                </a>
              </li>
      
               <li class="nav-item">
                <a class="nav-link active" onClick={logout} href="#!">
                <img 
                style={{width:'30px', borderRadius: '50%'}}
                src="https://avatars0.githubusercontent.com/u/17266803?s=460&u=4c801c80490fbe466e6d6a1db2c9f3759c4981e9&v=4"
                alt="New images"
                 />
                </a>
              </li>

             
      
    </ul>

    
  </div>
  </Fragment>
    
  );

  const guestLinks = (
    <Fragment>
       <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      
      <li className="nav-item">
        <Link href="/login" className="nav-link" to="/Login" >
        <i style={{fontSize: '28px'}} class="fas fa-user-circle fa-2x"></i>
        </Link>
      </li>
      
      
    </ul>
  </div>
  
    </Fragment>
  );

  return (
   <div>
    <Fragment className="main-panel" id="main-panel">
      <nav  className="navbar navbar-expand-lg   bg-primary bg-dark">
      <a
       class="navbar-brand"
       style={{fontWeight: '900', fontSize: '17px'}}
        href="/"
        >Dashboard</a>        
     <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </nav>
      
    </Fragment>
   
    </div>
    
  );
  
};



Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
