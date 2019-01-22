import React from 'react'

export default function Title({name,title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-centre text-title">
        <h1 className="text-capitalize font-width-bold">
          {name} <strong className="text-blue">{title}
          </strong>
        </h1>
      </div>
    </div>
  )
}
