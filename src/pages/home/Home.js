import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <div>Hiển thị 1 vài sp đại diện</div>
        <div>
            <h1>1 vài thành phần khác, không cần thiết tách components</h1>
        </div>
        <Footer/>
    </div>
  )
}
