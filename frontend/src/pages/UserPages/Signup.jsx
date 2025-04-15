import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-400 to-blue-50 flex items-center justify-center">
      <div className="min-h-150 w-150 bg-white flex flex-col gap-7 p-10">
        <h1 className="text-4xl font-sans font-bold">Create your account</h1>
        <TextField required id="outlined-required" placeholder="Name" />
        <TextField required placeholder="Email" />
        <TextField required placeholder="Email" />
        <Button
          variant="contained"
          className="w-full flex items-center content-center active:scale-95"
          onClick={() => navigate('/')}
        >
          Sign up
        </Button>
        <p>
          Already have an account ?{' '}
          <span className="text-blue-600 hover:cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
