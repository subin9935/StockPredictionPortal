import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
   <>
       
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>
                   A Stock Prediction Tool is a sophisticated software application designed to analyze historical market data, economic indicators, and real-time financial trends in order to forecast future price movements of stocks or other securities. Leveraging advanced algorithms such as machine learning models (including linear regression, random forests, and neural networks), these tools identify patterns and correlations that may not be apparent to human traders. While no prediction can guarantee accuracy due to the inherently volatile and unpredictable nature of financial markets, a well-designed stock prediction tool provides investors with data-driven insights, risk assessments, and potential buy/sell signals to support informed decision-making. Many tools also integrate visualization dashboards, technical indicators (like RSI and MACD), and news sentiment analysis to offer a comprehensive view of market conditions. Used responsibly—as an辅助 tool rather than a definitive guide—stock prediction systems empower both novice and experienced investors to navigate complex markets with greater confidence and strategic clarity. 
                </p>
                <Button text="Explore Now" class ="btn-outline-info" />
            </div>

        </div>
        
   </>
  )
}

export default Main