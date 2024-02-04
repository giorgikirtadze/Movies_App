import React from 'react'
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
export default function WatchHeader() {
  let navigate = useNavigate();
  const handleNavigate = (patch) => {
    navigate(patch)
  }
  return (
    <div>
      <header>
        <IoReturnUpBack onClick={() => handleNavigate(`/`)} className='retutnBackIcon'/>
      </header>
    </div>
  )
}
