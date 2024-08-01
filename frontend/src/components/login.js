import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emptyEmailPassErr, setEmptyEmailPassErr] = useState('')
  const navigate = useNavigate();

  const handleSubmit =(event) => {
    event.preventDefault();
    setEmailError('')
    setPasswordError('')
    const loginDetails = { email, password}
    // console.log(email)
    // console.log(password)
    fetch('https://shoes-website-backend.vercel.app/user/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      credentials: 'include',
      body: JSON.stringify(loginDetails)
    }).then(response => response.json())
    .then((data) => {
      if(!data.token){
        navigate('/login')
      }
      if(data.EmailPassword){
        setEmptyEmailPassErr(data.EmailPassword)
        return;
      }
      if(data.passwordError || data.userError ){
        setPasswordError(data.passwordError);
        setEmailError(data.userError);
        return
      } else{
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/')
      }
    })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">
            {emailError && <p className='alert alert-danger'>{emailError}</p>}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {passwordError && <p className='alert alert-danger'>{passwordError}</p>}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        {emptyEmailPassErr && <p className='alert alert-danger'>{emptyEmailPassErr}</p>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
