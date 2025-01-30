import React from 'react'

const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex justify-start items-center space-x-8'> 
      <div className="form-control">
        <label className="label cursor-pointer select-info">
          <span className="label-text text-white">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary mx-3" checked = {selectedGender === "male"} onChange={()=> onCheckBoxChange("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Female</span>
          <input type="checkbox" className="checkbox checkbox-primary mx-3" checked = {selectedGender === "female"} onChange={()=> onCheckBoxChange("female")} />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
