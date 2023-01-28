import React from 'react'

const Info = ({keyInfo, value}) => {
  return (
    <div style={{textAlign: "left"}}>
      <p>{keyInfo} : {value}</p>
    </div>
  )
}

export default Info
