import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { signInStart, signInFailure, signInSuccess } from '../redux/user/UserSlice';
import OAuth from '../components/OAuth';

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localError, setLocalError] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null); 

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        setLocalError(data.message); 
      } else {
        dispatch(signInSuccess(data));
        navigate('/home');
        console.log(data);
      }
    } catch (err) {
      setLocalError('An error occurred while processing your request.');
    } finally {
      dispatch(signInFailure(localError)); 
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='text' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-700'>{error}</p>}
    </div>
  );
}

export default SignIn;
