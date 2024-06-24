import React from 'react'
import { useState } from 'react';
import "./Managingaccount.css"


const Managingaccount = () => {
  const [loanManagementOptionVal, setLoanManagementOptionVal] = useState('');
  const [collectionAmount, setCollectionAmount] = useState('');
  const [collectionPaydate, setCollectionPaydate] = useState(null);
  const [additionalPrinciple, setAdditionalPrinciple] = useState('');
  const [paydate, setPaydate] = useState(null);
  const [selectedLoanAmount, setSelectedLoanAmount] = useState('');

  const minDate = new Date(); // Assuming minDate is today's date

  const handleLoanManagement = () => {
    
  };

  const handleCancel = () => {
    
  };

  return (
    <div>
     
        <div className='container'>
          <h4>Manage Your Loan Account</h4>

         
            <div className="row mlft-0 mtp-10 pay-card">
              <div className="col-xs-12 textLeftElement   text-dark">
                <input
                  id="PaymyNextDue"
                  type="radio"
                  name="PaymyNextDue"
                  value="5"
                  checked={loanManagementOptionVal === '5'}
                  onChange={() => setLoanManagementOptionVal('5')}
                />{' '}
                I want to pay my next payment using my credit / debit card
              </div>
            </div>
          

         
            <div class="row mlft-0 mtp-10"  >
        <div class="col-xs-12 textLeftElement  text-dark">
            <input id="PaymyNextDue" type="radio" name="PaymyNextDue" value="6" /> I want to pay / schedule an amount of $
            <input type="text" currencyMask  class="txtcntrl"id="amountcntrl" name="amountcntrl" style={{marginLeft:"10px",marginRight:"10px",height:"20px"}} />
            on this date
           
            <input  autocomplete="off"  type='text' readonly  class="txtcntrl txtcntrldate" style={{marginLeft:"10px",marginRight:"10px",height:"20px"}} /> 
        </div>
        <ul className="listulradio  text-dark">
        <li>
          If current date is selected, then the payment will be taken through credit / debit card.
        </li>
        <li>
          Please note any additional payments scheduled will be applied to the outstanding interest, fees, and then principal.
        </li>
        <li>
          Additional payments are encouraged and can reduce the number of payments remaining in the loan.
        </li>
        <li>
          Additionally scheduled payments will not replace, reduce, or cancel your next scheduled payment until your balance is paid in full.
        </li>
      </ul>
    </div>
       

        
            <div className="row mlft-0 mtp-10 ">
              <div className="col-xs-12 textLeftElement  text-dark">
                <input
                  id="rbtnRenewPayAddln"
                  type="radio"
                  name="Renewal"
                  value="0"
                  checked={loanManagementOptionVal === '0'}
                  onChange={() => setLoanManagementOptionVal('0')}
                />{' '}
                I want to pay / schedule an additional payment in the amount of $
                <input
                  type="text"
                  className="txtcntrl"
                  value={additionalPrinciple}
                  onChange={(e) => setAdditionalPrinciple(e.target.value)}
                  id="amountcntrl"
                  name="amountcntrl"
                  style={{marginLeft:"10px",marginRight:"10px",height:"20px"}}
                />{' '}
                on this date
                <input
                  selected={paydate}
                  onChange={(date) => setPaydate(date)}
                  minDate={minDate}
                  id="datecontrol"
                  name="datecontrol"
                  className="txtcntrl txtcntrldate"
                  placeholderText="MM/DD/YYYY"
                  disabledKeyboardNavigation
                  // excludeDates={disabledDates}
                  filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                  style={{marginLeft:"10px",marginRight:"10px",height:"20px"}}
                />
              </div>
              <ul className="listulradio  text-dark">
                <li>
                  If current date is selected, then the payment will be taken through credit / debit card.
                </li>
                <li>
                  Please note any additional payments scheduled will be applied to the outstanding interest,
                  fees, and then principal.
                </li>
                <li>
                  Additional payments are encouraged and can reduce the number of payments remaining in the
                  loan.
                </li>
                <li>
                  Additionally scheduled payments will not replace, reduce, or cancel your next scheduled
                  payment until your balance is paid in full.
                </li>
              </ul>
            </div>


      
            <div className="row mlft-0 mtp-10">
              <div className="col-xs-12 textLeftElement  text-dark">
                <input
                  id="rbtQRRenew_Full"
                  type="radio"
                  name="Renewal"
                  value="1"
                  checked={loanManagementOptionVal === '1'}
                  onChange={() => setLoanManagementOptionVal('1')}

                />{' '}
                I want to pay my loan in full today
              </div>
            </div>
          

          {/* {lcm.IsElegibleForNewLoan && ( */}
            <div>
              <div className="row mlft-0 mtp-10">
                <div className="col-xs-12 textLeftElement  text-dark">
                  <input
                    id="rbtnNewLoanApply"
                    type="radio"
                    name="Renewal"
                    value="2"
                    checked={loanManagementOptionVal === '2'}
                    onChange={() => setLoanManagementOptionVal('2')}
                  />{' '}
                  I want to apply for a new loan
                </div>
              </div>
              {loanManagementOptionVal === '2' && (
                <div className="row col-md-8" style={{ marginTop: '10px', display: 'block' }}>
                  <select
                    value={selectedLoanAmount}
                    onChange={(e) => setSelectedLoanAmount(e.target.value)}
                  >
                    <option value="0" disabled>
                      Select your loan amount
                    </option>
                    {/* {loanAmountArray.map((amt, index) => (
                      <option key={index} value={amt.val}>
                        {amt.text}
                      </option>
                    ))} */}
                  </select>
                </div>
              )}
            </div>
          {/* )} */}

      
{/*      
        <div className="row col-md-8" style={{ marginTop: '10px', display: 'block' }}>
          <select >
            <option value="0" disabled>Select your loan amount</option>
            {loanAmountArray.map((amt, index) => (
              <option key={index} value={amt.val}>{amt.text}</option>
            ))}
          </select>
        </div> */}
     
            <div className="row mlft-0 mtp-10">
              <div className="col-xs-12 textLeftElement  text-dark">
                <input
                  id="rbtndonot"
                  type="radio"
                  name="Renewal"
                  value="3"
                  checked={loanManagementOptionVal === '3'}
                  onChange={() => setLoanManagementOptionVal('3')}
                />{' '}
                I do not want this loan
              </div>
              <ul className="listulradio  text-dark">
                <li>
                  If the previously requested credit has already been processed then selecting this option
                  will create a debit to your bank account on file, on the next banking business day, for the
                  full amount of the principal balance that was disbursed (no fees, nor interest).
                </li>
              </ul>
            </div>
       

            <div className="btndiv">
  <button className="btn btn-grp btn-sub btn-primary" style={{ height: '30px', padding: '5px 10px', fontSize: '14px' }} onClick={handleLoanManagement}>
    SUBMIT
  </button>
  <button className="btn btn-grp btn-cac btn-primary" style={{ height: '30px', padding: '5px 10px', fontSize: '14px' ,marginLeft:"20px" }} onClick={handleCancel}>
    CANCEL
  </button>
</div>

        </div>
      
    </div>
  );
};

export default Managingaccount
