import TradingAppHeader from '@/components/header'
import React from 'react'
import TradingFooter from '@/components/footer'
import TradingPlatformPage from './home/page'

const page = () => {
  return (
    <div>
      <TradingAppHeader/>
      <TradingPlatformPage/>
      <TradingFooter/>
    </div>
  )
}

export default page
