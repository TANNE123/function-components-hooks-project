import React, { useContext } from 'react'
import { Details } from '../../App'

const UpdateComponent = () => {
    const [update]=useContext(singleDetails)
    console.log(update);
    
  return (
    <div>
      {JSON.stringify(update)}
    </div>
  )
}

export default UpdateComponent
