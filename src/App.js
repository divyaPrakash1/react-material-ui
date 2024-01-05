import logo from './logo.svg';
import './App.css';

import { Button, ButtonGroup, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('primary')
  const [disable, setDisable] = useState(false)
  const customMe = () => {
    // alert(123123)
    setColor('secondary')
    // setDisable(true)
  }
  return (
    <div className="App">
      <h1>React MUI</h1>
      {/* <button>Click Me</button> */}
      {/* <Button style={{ color: 'prime' }}>Material UI Button</Button>
      <Button variant="outlined">Outlined</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
      <ButtonGroup variant='outlined'
        orientation='vertical'>

        <Button
          color={color}
          variant='contained'
          onClick={() => customMe()}
          disabled={disable}
        >One</Button>
        <Button
          color={color}
          variant='contained'
          onClick={() => customMe()}
          disabled={disable}
        >Two</Button>
        <Button
          color={color}
          variant='contained'
          onClick={() => customMe()}
          disabled={disable}
        >Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
