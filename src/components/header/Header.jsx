import React from 'react'
import {GiMuscleUp} from 'react-icons/gi'
import './header.css'

export const Header = () => {
  return (
    <div className="container header__container">
        <div className="header__logo">
          <GiMuscleUp />
        </div>
        <div className="muscle__text">
          <h1>Muscle!Muscle!</h1>
      </div>
    </div>
  )
}
