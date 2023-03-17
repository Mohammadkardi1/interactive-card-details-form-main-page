import React, {useState} from 'react'
import bgDesktop from '../images/bg-main-desktop.png'
import bgMobile from '../images/bg-main-mobile.png'
import cardLogo from '../images/card-logo.svg'
import { Form } from './Form'
import {format} from 'date-fns'

export const Body = () => {

    const [name, setName] =useState("")
    const [cardNumber, setcardNumber] =useState("")
    const [expiryDate, setExpiryDate] =useState("01/23")
    const [cvc, setCvc] =useState("")


    return (
        <div className='biggest-div d-lg-flex align-items-center justify-content-center position-relative'>
            {/* Desktop Background */}
            <div className="d-none d-lg-block bg-desktop position-absolute">
                <img src={bgDesktop}
                    alt="" 
                    style={{width: '100%', height:'100vh'}} />
            </div>
            {/* Mobile Background */}
            <div className="d-block d-lg-none position-absolute w-100 bg-modile">
                <img src={bgMobile} 
                    alt="" 
                    style={{width: '100%', maxHeight:'40vh'}}/>
            </div>
            {/* Front and Back Cards Section */}
            {/* Grid For Cards and Form */}
            <div className="row g-0 w-100">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 ">
                    {/* Grid For Front and Back Cards */}
                    <div className="row m-0 g-lg-4 position-relative">
                        {/* Front Card */}
                        <div className="col-12 order-2 order-lg-1 d-flex justify-content-center mt-0 p-0">
                            <div className='front-card p-2 p-lg-3 d-flex flex-column justify-content-between text-white' >
                                <img src={cardLogo} alt=""/>
                                <div>
                                    <p className='card-number' style={{letterSpacing:'3px'}}>{cardNumber === "" ? "1234 5678 9123 0000" :cardNumber}</p>
                                    <div className='card-name-date d-flex justify-content-between'>
                                        <p className='m-0 text-uppercase card-name'>{name === "" ? "e.g. Jane Appleseed" : name}</p>
                                        <p className='m-0 card-date'>{format (new Date(expiryDate),"MM - yy")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Back Card */}
                        <div className="col-12 order-1 order-lg-2 d-flex justify-content-center"
                            style={{padding:"0 0 0 100px"}}>
                            <div className='back-card position-relative'>
                                <p className='position-absolute'>{cvc === "" ? "123" : cvc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* From Section */}
                <div className="col-12 col-lg-6 ">
                    <Form name={name} setName={setName}
                        cardNumber={cardNumber} setcardNumber={setcardNumber}
                        expiryDate={expiryDate} setExpiryDate={setExpiryDate}
                        cvc={cvc} setCvc ={setCvc}
                        />
                </div>
            </div>
        </div>
    )
}
