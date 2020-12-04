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

    <div className="row">
    <div className="col-7" style={{}}>
    <img 
      style={{marginTop: '15vh', marginRight: '20vw', height: '350px', width: '400px', borderRadius: '50%'}}
      src="https://www.ledgerinsights.com/wp-content/uploads/2019/04/jpmorgan.3.jpg"
      alt="new"
      />
    </div>

    <div className="col-5">
    <div style={{margin: 'auto'}}>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead" style={{}}>
        <i style={{color: 'orange'}} /> JP Morgan - Login Panel
      </p>
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
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
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
