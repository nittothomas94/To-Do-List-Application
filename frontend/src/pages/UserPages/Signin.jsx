import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  console.log(user);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-400 to-blue-50 flex items-center justify-center">
      <div className="min-h-150 w-150 bg-white flex flex-col gap-7 p-10">
        <h1 className="text-4xl font-sans font-bold">Login to your account</h1>
        <TextField
          required
          placeholder="Email"
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          required
          placeholder="Password"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          className="w-full flex items-center content-center active:scale-95"
          onClick={() => navigate('/')}
        >
          Sign in
        </Button>
        <p>
          New here?
          <span
            onClick={() => {
              navigate('/signup');
            }}
            className="text-blue-600 hover:cursor-pointer"
          >
            create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
