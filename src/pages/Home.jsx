import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <div className='container-fluid m-3'>
        <div className='fs-4'><span className='fs-1'>Welcome  </span>BanasCANDO</div>
        <hr />
        <div className='fs-5'>Hello CANDO ADMIN !!!</div>
        <div>Department : ADMIN</div>
        <div>Designation : ADMIN</div>
      </div>
    </div>
  )
}

export default Home
