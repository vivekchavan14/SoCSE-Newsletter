import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../redux/user/UserSlice'
import { useNavigate } from 'react-router-dom';


function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async() => {
         try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('api/auth/google', {
               method : 'POST',
               headers : {
                  'Content-Type' : 'application/json',
               },
               body : JSON.stringify({ name : result.user.displayName, email : result.user.email, photo : result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
         } catch (error) {
            console.log('Could not sigin with Google', error)
         }
  }


  return (
    <div>
      <button type='button' className='bg-red-700 text-white p-3 rounded-lg max-w-lg mx-auto text-center w-full uppercase hover:opacity-80' onClick={handleGoogleClick}>Continue with google</button>
    </div>
  )
}

export default OAuth;
