import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function NotificationTop() {
  const [transfer, setTransfer] = React.useState({
    
    bottom: false,
  
  });

  const toggleDrawerTransfer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setTransfer({ ...transfer, [anchor]: open });
  };

  const listTransfer = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
     
      onKeyDown={toggleDrawerTransfer(anchor, false)}
    >
      <List>
      
          <ListItem >
            <ListItemButton>
               <h1>hi</h1>
            </ListItemButton>
          </ListItem>
      
      </List>
     
    </Box>
  );

  return (
    <div>
   <div class="menu-size" style={{height:"440px"}}>
    <div class="d-flex mx-3 mt-3 py-1">
        <div class="align-self-center">
            <h1 class="mb-0">Transfer Funds</h1>
        </div>
        <div class="align-self-center ms-auto">
            <a href="#" class= "ps-4 shadow-0 me-n2" data-bs-dismiss="offcanvas">
                <i class="bi bi-x color-red-dark font-26 line-height-xl"></i>
            </a>
        </div>
    </div>
    <div class="divider divider-margins mt-3"></div>
    <div class="content mt-0">
        <div class="form-custom form-label form-icon">
            <i class="bi bi-wallet2 font-14"></i>
            <select class="form-select rounded-xs" id="c6" aria-label="Floating label select example">
                <option selected>Main Account</option>
                <option value="1">Savings Account</option>
                <option value="2">Company Account</option>
            </select>
            <label for="c6" class="form-label-always-active color-highlight font-11">Choose Account</label>
        </div>
        <div class="pb-3"></div>
        <div class="form-custom form-label form-icon">
            <i class="bi bi-code-square font-14"></i>
            <input type="number" class="form-control rounded-xs" id="c3" placeholder="BNK_1245" />
            <label for="c3" class="form-label-always-active color-highlight font-11">ID Number</label>
            <span class="font-10">(required)</span>
        </div>
        <div class="pb-3"></div>
        <div class="form-custom form-label form-icon">
            <i class="bi bi-code-square font-14"></i>
            <input type="number" class="form-control rounded-xs" id="c4" placeholder="150.00"/>
            <label for="c4" class="form-label-always-active color-highlight font-11">Amount</label>
            <span class="font-10">( Currency: USD )</span>
        </div>
        <div class="pb-2"></div>
        <div class="form-check form-check-custom">
            <input class="form-check-input" type="checkbox" name="type" value="" id="c2"/>
            <label class="form-check-label" for="c2">I accept the Transfer <a href="#">Terms of Service</a></label>
            <i class="is-checked color-green-dark font-14 bi bi-check-circle-fill"></i>
            <i class="is-unchecked color-green-dark font-14 bi bi-circle"></i>
        </div>
    
    </div>
    <a href="#" data-bs-dismiss="offcanvas" class="mx-3 mb-3 btn btn-full gradient-green shadow-bg shadow-bg-s">Transfer Funds</a>
</div>
    </div>
  );
}
