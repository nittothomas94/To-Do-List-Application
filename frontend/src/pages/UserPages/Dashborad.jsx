import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TaskCardSkeleton from '../../components/UserComponents/TaskCardSkeleton/TaskCardSkeleton';
import axios from '../../utils/axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const Dashborad = () => {
  const [Task, setTask] = useState([]);
  const [StatusFilter, setStatusFilter] = useState('All');
  const [PriorityFilter, setPriorityFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getTask();
  }, [StatusFilter, PriorityFilter]);

  const getTask = async () => {
    try {
      let url = '/task';

      const queryParams = [];

      if (StatusFilter !== 'All') {
        queryParams.push(`status=${StatusFilter}`);
      }

      if (PriorityFilter !== 'All') {
        queryParams.push(`priority=${PriorityFilter}`);
      }

      if (queryParams.length > 0) {
        url += '?' + queryParams.join('&');
      }

      const response = await axios.get(url);
      setTask(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const onDeleteClick = id => {
    setTaskToDelete(id);
    setOpenDialog(true);
  };

  const onConfirmDelete = async () => {
    await axios.delete('/task/' + taskToDelete);
    setOpenDialog(false);
    setTaskToDelete(null);
    getTask();
  };

  const onCancel = () => {
    setOpenDialog(false);
    setTaskToDelete(null);
  };

  const onEditClick = id => {
    navigate('/edit-task/' + id);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="w-160 min-h-170 bg-white p-10 shadow-2xl rounded-2xl flex items-start justify-start flex-col gap-7">
        {/* section 01 */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Welcome, Nitto!</h1>
          <Button variant="outlined">Logout</Button>
        </div>

        {/* section 02 */}
        <div className="w-full flex items-center justify-between">
          <select
            id="statusFilter"
            value={StatusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="border border-gray-300 p-1"
          >
            <option value="All">Fil by Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <select
            id="priorityFilter"
            value={PriorityFilter}
            onChange={e => setPriorityFilter(e.target.value)}
            className="border border-gray-300 p-1"
          >
            <option value="All">Fil by priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <Button
            variant="contained"
            onClick={() => {
              navigate('/add-task');
            }}
          >
            Add Task
          </Button>
        </div>

        {/* section 03 */}
        <div className="flex flex-col gap-10 min-h-40 w-full mt-2">
          {Task.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white p-4 rounded-xl shadow-md shadow-gray-300 hover:shadow-lg transition duration-200 relative"
            >
              <h1 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h1>
              <p className="text-xs text-gray-500">
                Status: <span>{item.status}</span>
              </p>
              <p className="text-xs text-gray-500">
                Priority: <span>{item.priority}</span>
              </p>
              <div className="absolute right-2 top-8 flex gap-1">
                <Button
                  variant="text"
                  className="h-6"
                  onClick={() => onEditClick(item._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="text"
                  className="h-6"
                  onClick={() => onDeleteClick(item._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={onCancel}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirmDelete} color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashborad;
