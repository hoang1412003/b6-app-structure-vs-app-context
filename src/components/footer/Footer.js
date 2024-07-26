import React, { useContext } from 'react'

import { Button } from 'reactstrap'
import { AppContext } from '../../AppContext'


export default function Footer() {
  const {count, setCount} = useContext(AppContext)
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={()=>setCount(count + 1)}>Count up</Button>
      Footer
    </div>
  )
}
