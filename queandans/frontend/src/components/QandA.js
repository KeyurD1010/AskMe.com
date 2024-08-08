import React from 'react'
import Feed from './Feed'
import QandAHeader from './QandAHeader'
import Sidebar from './Sidebar'
import Widget from './Widget'
import './css/QandA.css'

function QandA() {
  return (
    <div className='qanda'>
        <QandAHeader />
        <div className="qanda_contents">
          <div className="qanda_content">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
    </div>
  )
}

export default QandA