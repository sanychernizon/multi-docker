import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return(
    <div>
      The other page is here!
      <Link to="/">Voltar para home</Link>
    </div>
  )
}