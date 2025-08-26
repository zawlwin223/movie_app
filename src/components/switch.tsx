'use client'
import { useState } from 'react'

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center  bg-transparent border-1 p-1 rounded-[50px] h-[40px]">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked
              ? 'rounded-[50px] text-gradient bg-[#00ffff]'
              : 'text-body-color'
          }`}>
          Today
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked
              ? 'bg-[#00ffff] rounded-[50px] text-gradient'
              : 'text-body-color'
          }`}>
          This Week
        </span>
      </label>
    </>
  )
}

export default Switcher
