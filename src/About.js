import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ text: '', image: '' });

  const handleKnowMore = (text) => {
    setDialogContent({ text });
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <h1>Performance</h1>
      <div className="container">
        <div className="box">
          <img src={require('./asset/fees.png')} alt="Fees Payment" />
          <p>Fees Payment</p>
          <button onClick={() => handleKnowMore('Fees Payment Details')}>Know More</button>
        </div>
        <div className="box">
          <img src={require('./asset/marksheet.png')} alt="Marksheet" />
          <p>Marksheet</p>
          <button onClick={() => handleKnowMore('Marksheet Details')}>Know More</button>
        </div>
        <div className="box">
          <img src={require('./asset/attendence.png')} alt="Attendence" />
          <p>Attendence</p>
          <button onClick={() => handleKnowMore('Attendance Details')}>Know More</button>
        </div>
        <div className="box">
          <img src={require('./asset/comms.png')} alt="Communication" />
          <p>Communication</p>
          <button onClick={() => handleKnowMore('Communication Details')}>Know More</button>
        </div>
        <div className="box">
          <img src={require('./asset/discipline.png')} alt="Discipline" />
          <p>Discipline</p>
          <button onClick={() => handleKnowMore('Discipline Details')}>Know More</button>
        </div>
        <div className="box">
          <img src={require('./asset/ptm.png')} alt="PTM" />
          <p>PTM</p>
          <button onClick={() => handleKnowMore('PTM Details')}>Know More</button>
        </div>
      </div>
      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <button className="close-button" onClick={handleCloseDialog}>
              Close
            </button>
            <p>{dialogContent.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
