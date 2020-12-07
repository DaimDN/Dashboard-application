import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const { fname, lname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
      register({ fname, lname, email, password });
    
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="row w3-animate-zoom">
    <div className="col-6" style={{}}>
    <img 
      style={{marginTop: '5vh', marginRight: '20vw', height: '350px', width: '400px', borderRadius: '50%',
      boxShadow : '0px 0px 10px 2px black'
      }}
      src="https://cdn.vox-cdn.com/thumbor/xox_VT-NMs0nkZ9Wlg6lwi1S7Wg=/0x0:2000x1600/1200x800/filters:focal(840x640:1160x960)/cdn.vox-cdn.com/uploads/chorus_image/image/64147294/180420_12_28_42_5DSR2360.0.jpg"
      alt="new"
      />
    </div>

    <div className="col-6">
    <div class="card card-chart" style={{padding: '60px'}}>
              <div class="card-header">
    <div style={{margin: 'auto'}}>
    <div style={{}}>
    <img style={{width: '70%'}} src="https://www.jpmorgan.com/content/dam/shared/logos/logos-cb-jpm.svg"
      alt="" />
      <h1 style={{fontSize: '22px'}} className="text-primary">Register Account</h1>
    
     
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            value={fname}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            value={lname}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control"
          />
          <small className="form-text">
             Please use your JPMC email 
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </div>
     
      </div>
    </div>
    </div></div>


    </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
