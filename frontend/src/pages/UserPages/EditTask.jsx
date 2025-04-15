import {
  Input,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../utils/axios';
const EditTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
  });

  const { id } = useParams();

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await axios.get('/task/' + id);
    setTask(response.data);
  };

  console.log(task);

  const navigate = useNavigate();

  const onUpdateClick = async () => {
    await axios.patch('/task/' + id, task);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="w-160 min-h-170 bg-white p-10 shadow-2xl rounded-2xl flex items-start justify-start flex-col gap-7">
        <h1>Create Task</h1>

        <TextField
          label="Task Title"
          value={task.title}
          variant="outlined"
          fullWidth
          onChange={e => {
            setTask({ ...task, title: e.target.value });
          }}
        />

        <TextField
          label="Task Description"
          value={task.description}
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
            value={task.status}
            onChange={e => setTask({ ...task, status: e.target.value })}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            label="Priority"
            value={task.priority}
            onChange={e => setTask({ ...task, priority: e.target.value })}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={onUpdateClick}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditTask;
