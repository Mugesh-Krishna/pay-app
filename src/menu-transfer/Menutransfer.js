import React from 'react'
import "./Menutransfer.css"
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Menutransfer = () => {
    const [age, setAge] = React.useState('');

 
  
  return (

    <div className="menu-size" style={{height:"40%" }}>
        <div className="d-flex mx-3 mt-3 py-1">
            <div className="align-self-center">
                <h1 className="mb-0">Transfer Funds</h1>
            </div>
            <div className="align-self-center ms-auto">
                <a href="#" className=' ps-4 shadow-0 me-n2' data-bs-dismiss="offcanvas">
                    <i className="bi bi-x color-red-dark font-26 line-height-xl"></i>
                </a>
            </div>
        </div>
        <div className="divider divider-margins mt-3"></div>
        <div className="content mt-0">
        <FormControl
  sx={{ m: 1, minWidth: 120, width: "100%", borderRadius: "50px"}}
  size="small"
>

  <InputLabel id="demo-select-small-label">Choose Account</InputLabel>
  
  <Select
    labelId="demo-select-small-label"
    id="demo-select-small"
    value={age}
    label="Age"
    sx={{ height: "50px" }}
  >
    
    <MenuItem value={10}>Main Account</MenuItem>
    <MenuItem value={20}>Savings Account</MenuItem>
    <MenuItem value={30}>Company Account</MenuItem>
  </Select>
</FormControl>

            <div className="pb-3"></div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          label="ID Number"
          id="outlined-size-small"
          sx={{ height: "50px" }}
          size="BNK_1234"
        />
      
      </div>
     
    </Box>
            <div className="pb-3"></div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          label="Amount"
          id="outlined-size-small"
          sx={{ height: "50px" }}
          size="Amount"
        />
      
      </div>
     
    </Box>
            <div className="pb-2"></div>
            <div className="form-check form-check-custom">
                <input className="form-check-input" type="checkbox" name="type" value="" id="c2"/>
                <label className="form-check-label" for="c2">I accept the Transfer <a href="#">Terms of Service</a></label>
                <i className="is-checked color-green-dark font-14 bi bi-check-circle-fill"></i>
                <i className="is-unchecked color-green-dark font-14 bi bi-circle"></i>
            </div>
        
        </div>
        <a href="#" data-bs-dismiss="offcanvas" className="mx-3 mb-3 btn btn-full gradient-green shadow-bg shadow-bg-s">Transfer Funds</a>
    </div>
    
  )
}

export default Menutransfer
