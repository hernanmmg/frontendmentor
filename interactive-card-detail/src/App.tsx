import './assets/css/reset.css';
import './App.css';

function App() {

  return (
    <div className='main'>
      <div className='side__color'></div>
      <div className='side__body'>
        <div className='side__body__form'>
          <form className="form">
            <div className="group">
              <label className="labelname">Cardholder Name
                <input type="text" placeholder='e.g. Jane Appleseed' name='name'/>
              </label>
              <p className='text-error'></p>
            </div>
            <div className="group">
              <label htmlFor="">Card Number
                <input type="text" placeholder='e.g. 1234 5678 9123 0000' name='number'/>
              </label>
              <p className='text-error'></p>
            </div>
            <div className="group flex-row">
              <label className='col-6'>Exp. Date (MM/YY)
                <div className="d-flex">
                  <input className='col-6' type="text" placeholder='MM' name='mm'/>
                  <input className='col-6' type="text" placeholder='YY' name='yy'/>
                </div>
              </label>
              <p className='text-error'></p>
              <label className='col-6'>CVC
                <input type="text" placeholder='e.g. 123' name='cvc'/>
              </label>
              <p className='text-error'></p>
            </div>
            <div className="group-button">
              <button className="input-button">Confirm</button>
            </div>
          </form>
          {/*
          0000 0000 0000 0000
          Jane Appleseed
          00/00
        
          000*/}
        
          {/* Completed state start */}
        
          {/*Thank you!
          We've added your card details
        Continue*/}
          
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">@hernanmmg</a>.
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="card__face"></div>
      <div className="card__back"></div>
      {/* cards end */}
    </div>
  )
}

export default App
