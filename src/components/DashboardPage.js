import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const DashboardPage = () => {
  let history = useHistory()

  function RandGifLink () {
    history.push('/public/RandGif')
  }
  function GifSearchLink () {
    history.push('/public/GifSearch')
  }

  return (
    <div>
      <h1>Get Gif</h1>
      <button onClick={RandGifLink}>Random</button>
      <button onClick={GifSearchLink}>Gif Search</button>
    </div>
  )
}

export default DashboardPage
