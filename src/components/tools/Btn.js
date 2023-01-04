import React from 'react'
import './btn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const Btn = ({name,}) => {
  return (
    <>
      <button className='tools'>
        <FontAwesomeIcon icon={faCode} className="btn-icon" flip />
        {name}
      </button>
    </>
  )
}

export default Btn
