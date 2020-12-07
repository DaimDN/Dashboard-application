import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';



const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  
  const [hidden, setHidden] = React.useState(false);
  const [auth, setLogout] = React.useState(false);


 
  const authLinks = (
   <Fragment>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li class="nav-item active">
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
                  <i class="far fa-comment fa-2x"></i>
                  </p>
                </a>
              </li>
            
             
              <li class="nav-item">
                <a class="nav-link" onClick={() => setHidden(true)}  href="#!">
                 
                  <p>
                  <i class="fas fa-search fa-2x"></i>
                  </p>
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                 
                  <p>
                  <i class="fas fa-bell fa-2x"></i>


                  </p>
                </a>
              </li>
      
               <li class="nav-item">
                <a class="nav-link active" onClick={() => setLogout(true)} href="#!">
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
        <Link class="nav-link" to="/">Privacy Policy</Link>
      </li>
      <li className="nav-item active">
        <Link class="nav-link" to="/">Terms and Conditions</Link>
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
    //#2a3eb1
   <div>
    <Fragment className="main-panel" id="main-panel">
      <nav  className="navbar navbar-expand-lg " style={{backgroundColor: '#2a3eb1'}}>
      <a
       class="navbar-brand"
       style={{fontWeight: '900', fontSize: '17px'}}
        href="/"
        >Dashboard</a>        
     <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </nav>
      {hidden ? (
        <div >
        <div  style={{
       fontWeight: '600',
       position: 'fixed',
       width: '100vw',
       right: '0',
       zIndex: '200',
       top: '-10px',
       height: '200vh',
       backgroundColor: 'rgb(0, 0, 0, 0.8)',
       
       
       }}>
         <div style={{padding: "30px"}}>
         <a href="/dashboard">
         <i  style={{color: 'whitesmoke'}} class="fas fa-2x fa-times-circle"></i>
         </a>
         </div>

       <div className="container" style={{
         position: 'absolute', 
         marginTop: '20vh',
         zIndex: '400', 
         marginLeft: '12%',
         color: 'black'
         
         
         }}>

         <form>
          <div className="row">
            <div className="col-lg-8">
            <input className="form-control" 
            style={{height: '50px', fontSize: '19px', position: 'absolute', bottom: '10px'}}
            placeholder="Search Query"

            />
            </div>
            <div className="col-lg-4">
              <button className="btn btn-primary btn-lg">Search</button>
             
            </div>
          </div>
         </form>


           </div>

         </div>

        </div>

      ) : (<div>

      </div>)}

      {auth ? (
        <div >
        <div style={{
       fontWeight: '600',
       position: 'fixed',
       width: '100vw',
       right: '0',
       zIndex: '200',
       top: '-10px',
       height: '200vh',
       backgroundColor: 'rgb(0, 0, 0, 0.9)',
       
       
       }}>

       <div className="container w3-animate-opacity" style={{
         position: 'absolute', 
         marginTop: '22vh',
         zIndex: '400', 
         marginLeft: '20%',
         color: 'black'
         
         
         }}>

         <div style={{}}>
         <h1 style={{fontWeight: '700'}} className="text-white display-4">Do you want to Logout ?</h1>
          <br/> 
          <a
            style={{marginRight: '50px'}}
           href="/dashboard" className="btn btn-white btn-lg">Cancel</a>
          <button 
            style={{marginRight: '50px'}}
           onClick={logout}  className="btn btn-danger btn-lg">Logout</button>
         </div>


           </div>

         </div>

        </div>

      ) : (<div>

      </div>)}
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
