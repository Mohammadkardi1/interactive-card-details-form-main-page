import React, { useState } from 'react'
import tick  from '../images/icon-complete.svg'


export const Form = ({name, setName, cardNumber, setcardNumber,expiryDate,setExpiryDate,cvc, setCvc}) => {

    const [confirmed, setConfirmed ] = useState(false)



    return (
        <div className='form-card h-100 px-3 px-sm-0 d-flex align-items-center justify-content-center justify-content-xl-start'>
            {confirmed ? <ThankYou confirmed={confirmed} setConfirmed={setConfirmed}/> :  (
                // Form Section
                <form>
                    {/* Cardholder Name Input */}
                    <div>
                        <label className='mb-1' htmlFor="cardholder_name">Cardholder Name</label>
                        <input className='mb-3 p-2 w-100 autofocus' 
                            type="text" 
                            placeholder='e.g. Jane Appleseed'
                            id='cardholder_name'
                            name='cardholder_name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    {/* Card Number Input */}
                    <div>
                        <label className='mb-1' htmlFor="">Card Number</label>
                        <input className='mb-3 p-2 w-100' 
                            type="text" 
                            placeholder='e.g. 1234 5678 9123 0000'
                            id='card_number'
                            name='card_number'
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) => setcardNumber(e.target.value)}/>
                    </div>
                    {/* Date and CVC Input */}
                    <div className='row row-cols-2 g-3 mb-4'>
                        {/* Date Input */}
                        <div className='col'>
                            <label className=' expiry_date mb-1' htmlFor="expiry_date">
                                Exp. Date <span style={{fontSize: '10px',fontWeight: 'bold'}}>(MM/YY)</span> 
                            </label>
                            <input className='p-2 w-100' 
                                type="month" 
                                placeholder='MM'
                                id='expiry_date'
                                name='expiry_date'
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                />
                        </div>
                        {/* CVC Input */}
                        <div className='col'>
                            <label className='mb-1' htmlFor="cvc">CVC</label>
                            <input className='w-100 p-2' 
                                type="number" 
                                placeholder='e.g. 123'
                                id='cvc'
                                name='cvc'
                                maxLength={3}
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}/>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input className='btn-violet p-2 rounded-2' 
                            type="submit"
                            value='Confirm'
                            onClick={() => setConfirmed(!confirmed)}
                            />
                    </div>
                </form>
            )}
        </div>
    )
}


function ThankYou ({confirmed, setConfirmed}) {
    return (
        <div className='thank-you text-center'>
            <img src={tick} alt='' className='mb-4'/>
            <h3 className='text-uppercase mb-3'>thank you!</h3>
            <p className='text-black-50 mb-5'>We've added your card details</p>
            <button className='btn-violet p-2 rounded-2'
                onClick={() => setConfirmed(!confirmed)}>Continue</button>
        </div>
    )
}