import React from 'react'
import { FaTrash } from "react-icons/fa";
const DeleteButton = () => {
  return (
      <button
      
      className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400 "
    >
      <FaTrash />
    </button>
  )
}

export default DeleteButton
