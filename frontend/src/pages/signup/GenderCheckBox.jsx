import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex justify-start items-center space-x-8'> 
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input type="checkbox" defaultChecked className="checkbox checkbox-primary mx-3" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Female</span>
          <input type="checkbox" defaultChecked className="checkbox checkbox-primary mx-3" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
