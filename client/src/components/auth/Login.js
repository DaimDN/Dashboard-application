import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>

    <div className="row w3-animate-zoom ">
    
    <div className="col-6" style={{}}>
    <img 
      style={{marginTop: '5vh', marginRight: '20vw', height: '350px', width: '400px', borderRadius: '50%',
      boxShadow : '0px 0px 10px 2px black'}}
      src="https://www.ledgerinsights.com/wp-content/uploads/2019/04/jpmorgan.3.jpg"
      alt="new"
      />
    </div>

    <div className="col-6">
    <div class="card card-chart" style={{padding: '60px'}}>
              <div class="card-header">
    <div style={{margin: 'auto'}}>
    <img style={{width: '70%'}} src="https://www.jpmorgan.com/content/dam/shared/logos/logos-cb-jpm.svg"
      alt="" />
      <h1 style={{fontSize: '22px'}} className="text-primary">Account</h1>
    
     
     
      <br/>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <br/>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-2" style={{}}>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </div>
    </div>
    </div>
    </div>


    </div>
      
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
