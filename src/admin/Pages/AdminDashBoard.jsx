import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'


const AdminDashBoard = () => {
  return (
    <>
    <AdminHeader/>

    <div className='grid grid-cols-[1fr_3fr]'>
        <AdminSideBar/>
        <div className=''></div>
    </div>

    
    
    </>
  )
}

export default AdminDashBoard