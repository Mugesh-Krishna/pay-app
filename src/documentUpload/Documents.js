import React from 'react'
import "./Documents.css"
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Sidebar from '../sidebar/sidebar';
const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [uploadStatus, setUploadStatus] = useState({});

  const handleFileUpload = (event, key) => {
    const file = event.target.files[0];
    const allowedExtensions = ['jpeg', 'jpg', 'png', 'pdf'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [key]: 'fileType',
      }));
      console.log(`Invalid file type: ${key}, File name: ${file.name}`);
      return;
    }

    
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        const newDocument = { key, file };
        setDocuments((prevDocuments) => {
          const existingDocIndex = prevDocuments.findIndex(doc => doc.key === key);
          if (existingDocIndex !== -1) {
            const updatedDocuments = [...prevDocuments];
            updatedDocuments[existingDocIndex] = newDocument;
            return updatedDocuments;
          } else {
            return [...prevDocuments, newDocument];
          }
        });
        setUploadStatus((prevStatus) => ({
          ...prevStatus,
          [key]: 'success',
        }));
        console.log(`Uploaded document: ${key}, File name: ${file.name}`);
      } else {
        setUploadStatus((prevStatus) => ({
          ...prevStatus,
          [key]: 'error',
        }));
        setDocuments((prevDocuments) => {
          const existingDocIndex = prevDocuments.findIndex(doc => doc.key === key);
          if (existingDocIndex !== -1) {
            const updatedDocuments = [...prevDocuments];
            updatedDocuments[existingDocIndex] = { key, file };
            return updatedDocuments;
          } else {
            return [...prevDocuments, { key, file }];
          }
        });
        console.log(`File too large: ${key}, File name: ${file.name}`);
      }
    }
   
    
  };
  
  const renderUploadStatus = (key, fileName) => {
    const maxWidthStyle = { maxWidth: '158px' }; 
    const errorMessage = `${fileName ? fileName : ''}`;
  
    if (uploadStatus[key] === 'success') {
      return <p className="mb-0 font-11 text-success" style={maxWidthStyle}>{fileName} Uploaded successful</p>;
    } else if (uploadStatus[key] === 'error') {
      return <p className="mb-0 font-11 text-danger" style={maxWidthStyle}>{fileName} size exceeds 5MB!</p>;
    }
    else if (uploadStatus[key] === 'fileType') {
      return <p className="mb-0 font-11 text-danger" style={maxWidthStyle}>{errorMessage}The uploaded file is Invalid Type !</p>;
    } else {
      return <p className="mb-0 font-11 opacity-100" style={maxWidthStyle}>*Uploaded file size less than 5MB</p>;
    }
  };
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [submissionClass, setSubmissionClass] = useState('');

const handleSubmit = () => {
  const allKeys = ['Award Letter', 'Bank Statement', 'Utility Bill', 'Pay Stub', 'Tax Form', 'Driving License', 'Others-Documents'];
  const allUploaded = allKeys.every(key => uploadStatus[key] === 'success');

  if (allUploaded) {
    setSubmissionStatus('All documents successfully uploaded.');
    setSubmissionClass('text-success');
  } else {
    setSubmissionStatus('Error: Some documents are not uploaded successfully.');
    setSubmissionClass('text-danger');
  }
};
const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
};

const DrawerList = (
  <Box sx={{ width: 240
     }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      
      <ListItem disablePadding>
        <ListItemButton>
          <Sidebar/>
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
  
  
  
  return (
    <div className="content container">
      <h4 className="text-center header" style={{marginRight:"0%"}}>Upload Document</h4>
      
      <a href="page-activity.html" className="d-flex py-1 form-upload award-1">
        <div className="align-self-center">
        <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-award-fill award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Award Letter</h5>
          {renderUploadStatus('Award Letter', documents.find(doc => doc.key === 'Award Letter')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Award Letter')} />
            <div>
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-5%" }}>Upload</span></div>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-100"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-bank award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Bank Statement</h5>
          {renderUploadStatus('Bank Statement', documents.find(doc => doc.key === 'Bank Statement')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Bank Statement')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-100"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-receipt award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Utility Bill</h5>
          {renderUploadStatus('Utility Bill', documents.find(doc => doc.key === 'Utility Bill')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Utility Bill')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-100"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-credit-card award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Pay Stub</h5>
          {renderUploadStatus('Pay Stub',documents.find(doc => doc.key === 'Pay Stub')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Pay Stub')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-50"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-currency-dollar award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Tax Form</h5>
          {renderUploadStatus('Tax Form',documents.find(doc => doc.key === 'Tax Form')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Tax Form')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-50"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
            <i className="bi bi-car-front-fill award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Driving License</h5>
          {renderUploadStatus('Driving License',documents.find(doc => doc.key === 'Driving License')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Driving License')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>

      <div className="divider my-2 opacity-50"></div>

      <a href="page-activity.html" className="d-flex py-1">
        <div className="align-self-center">
          <span className="icon rounded-s me-2 bg-white shadow-bg shadow-bg-s">
          <i class="bi bi-file-diff-fill award-icon"></i>
          </span>
        </div>
        <div className="align-self-center ps-1">
          <h5 className="pt-1 mb-n1">Others-Documents</h5>
          {renderUploadStatus('Others-Documents',documents.find(doc => doc.key === 'Others-Documents')?.file?.name)}
        </div>
        <div className="align-self-center ms-auto text-end">
          <label className="upload-btn">
            <input type="file" style={{ display: "none", height: "30px" }} onChange={(event) => handleFileUpload(event, 'Others-Documents')} />
            <span className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "-10%" }}>Upload</span>
          </label>
        </div>
      </a>
      
  

<button type="button" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "10px", marginLeft: "40%", marginTop: "0%" }} onClick={handleSubmit}>Submit</button>

{submissionStatus && (
  <div className={`submission-status-message ${submissionClass}`} style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
    {submissionStatus}
  </div>
)}

<div className="divider my-2 opacity-50"></div>
<div id="footer-bar" className="footer-bar-1 footer-bar-detached">
    <Link to="/documents">
        <i className="bi bi-wallet2"></i>
        <span>Cards</span>
    </Link>
    <a href="page-activity.html"><i className="bi bi-graph-up"></i><span>Activity</span></a>
    <Link to="/" className="circle-nav-2">
        <i className="bi bi-house-fill"></i>
        <span>Home</span>
    </Link>
    <Link to="/payments" className="circle-nav-2">
        <i className="bi bi-receipt"></i>
        <span>Payments</span>
    </Link>
    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar" onClick={toggleDrawer(true)}>
        <i className="bi bi-three-dots"></i><span>More</span>
    </a>
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
</div>
    </div>
  )
}

export default Documents
