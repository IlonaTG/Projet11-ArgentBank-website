import React from 'react'

function Account ({ title, amount, amountDescription }) {
    return (
        <section className='account'>
            <h2 className='sr-only'>Accounts</h2>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{amountDescription}</p>
            </div>
            <div className='account-content-wrapper cta'>
                <i className="fa-sharp fa-solid fa-chevron-right"></i>
            </div>
        </section> 
    )
}

export default Account