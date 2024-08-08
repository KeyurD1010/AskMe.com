import React from 'react'
import {Avatar} from '@material-ui/core';
import './css/QandABox.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

function QandABox() {
  const user = useSelector(selectUser);

  return (
    <div className='qandaBox'>
        <div className="qandaBox_info">
          <Avatar src={user?.photo}/>
          <span>{user?.userName}</span>
        </div>
        <div className="qandaBox_qanda">
          <p>A place to gain and share knowledge...</p>
        </div>
    </div>
  )
}

export default QandABox