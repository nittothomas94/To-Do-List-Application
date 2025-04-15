import { Button, TextField } from '@mui/material';

const Signin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-400 to-blue-50 flex items-center justify-center">
      <div className="min-h-150 w-150 bg-white flex flex-col gap-7 p-10">
        <h1 className="text-4xl font-sans font-bold">Login to your account</h1>
        <TextField required id="outlined-required" placeholder="Name" />
        <TextField required placeholder="Email" />
        <TextField required placeholder="Password" />
        <Button
          variant="contained"
          className="w-full flex items-center content-center active:scale-95"
        >
          Sign up
        </Button>
        <p>
          New here?{' '}
          <span className="text-blue-600 hover:cursor-pointer">
            create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
