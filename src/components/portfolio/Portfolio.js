import './Portfolio.css'

export default function Portfolio({goToMarket}) {
    return (
        <div className="portfolio-container">
            <span className='no-portfolio-label'>Not Portfolio Yet</span>
            <div onClick={() => goToMarket()} className='go-to-market-btn'>Go To Market</div>
        </div>
    )
}