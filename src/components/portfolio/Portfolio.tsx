import React from 'react'
import './Portfolio.css'

export default function Portfolio({goToMarket}: {goToMarket: Function}) {
    return (
        <div className="portfolio-container">
            <span className='no-portfolio-label'>Not Portfolio Yet</span>
            <div onClick={() => goToMarket()} className='go-to-market-btn'>Go To Market</div>
        </div>
    )
}