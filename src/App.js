import * as React from 'react';
import './App.css';

// import { Button, ButtonGroup, } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
import { Radio } from '@mui/material';
import { useState } from 'react';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  // const [color, setColor] = useState('primary')
  // const [disable, setDisable] = useState(false)
  // const [checkboxValue, setCheckboxValue] = useState([])
  const [radioValue, setRadioValue] = useState('female')
  // const customMe = () => {
  //   // alert(123123)
  //   setColor('secondary')
  //   // setDisable(true)
  // }
  // const checkBoxFun = (e) => {
  //   console.log('123123', e.target.value)
  //   let name = checkboxValue;
  //   name.push(e.target.value);
  //   console.log(name)
  // }
  const checkRadio = (e) => {
    setRadioValue(e.target.value);
    console.log('aaaa', e.target.value);
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
      {/* <ButtonGroup variant='outlined'
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
      </ButtonGroup> */}
      {/* <Checkbox {...label} />
      <Checkbox color='primary' value='10' onChange={(e) => checkBoxFun(e)} />
      <Checkbox color='primary' value='11' onChange={(e) => checkBoxFun(e)} />
      <Checkbox color="secondary" value='12' onChange={(e) => checkBoxFun(e)} />
      <Checkbox color='success' value='13' onChange={(e) => checkBoxFun(e)} />
      <Checkbox color='success' value='14' indeterminate onChange={(e) => checkBoxFun(e)} />
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='secondary' /> */}

      <div>
        <Radio color='primary' value='male' onChange={(e) => checkRadio(e)} checked={radioValue === 'male'} />
        <span>Male</span>
      </div>
      <div>
        <Radio color='primary' value='female' onChange={(e) => checkRadio(e)} checked={radioValue === 'female'} />
        <span>Female</span>
      </div>
      <div>
        <Radio color='primary' value='other' onChange={(e) => checkRadio(e)} checked={radioValue === 'other'} />
        <span>Other</span>
      </div>

    </div>
  );
}

export default App;
