import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)

      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="hero w-full my-[50px]">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center w-3/4 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-[75px}">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Sign Up" />
            </div>
            <p className='text-center my-[50px]'>Already have an account? <Link className='text-success font-bold' to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;