import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IResponse } from '../../types'
import Popup from '../Popup/Popup';
import { link } from 'fs';

interface IItem {
  data: {
    date_utc?: string;
    date_local?: string;
    flight_number?: string;
    name?: string;
    links?: {
      reddit?: string;
      patch?: {
        small?: string;
        large?: string;
      }
    }
    details?: string;
  }
  active:boolean
}

const StartItem: FC<IResponse> = ({
  date_precision,
  date_local,
  links,
  name,
  active
}) => {
  return (
    <div className='start-item'>
      <div className="img_wrapper">
        <img src={links?.patch?.small} alt="" />
      </div>
      <p className="start-name">
        {name}
      </p>
     <p className='start_time'> {date_local}</p>
     
    </div>
  )
}


export default StartItem
