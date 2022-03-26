import React from 'react'
import './input.css'

export const Input = (props) => {
  return (
    <div className="input__container">
      <div className="input__check">
        <input className="checkbox" type="checkbox"
          id={`check-id-${props.idx}`}
          name="scales"
          checked={props.check}
          onChange={() => props.changeChecks(props.idx)}/>
        <label for={`check-id-${props.idx}`}>{props.parts}</label>
      </div>
      <input className="input__num" type="number" value={props.count} onChange={(e) => props.changecounts(parseInt(e.target.value), props.idx)}/>
    </div>
  )
}
