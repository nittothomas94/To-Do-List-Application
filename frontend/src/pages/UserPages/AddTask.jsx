import {
  Input,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
  });

  console.log(task);

  const navigate = useNavigate();

  const onAddClick = async () => {
    await axios.post('/task', task);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="w-160 min-h-170 bg-white p-10 shadow-2xl rounded-2xl flex items-start justify-start flex-col gap-7">
        <h1>Create Task</h1>

        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          onChange={e => {
            setTask({ ...task, title: e.target.value });
          }}
        />

        <TextField
          label="Task Description"
          multiline
          rows={4}
          fullWidth
          onChange={e => {
            setTask({ ...task, description: e.target.value });
          }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            onChange={e => setTask({ ...task, status: e.target.value })}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            label="Status"
            onChange={e => setTask({ ...task, priority: e.target.value })}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={onAddClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
