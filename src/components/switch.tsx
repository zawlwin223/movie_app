'use client'
import { useState } from 'react'
import { useDispatch, UseDispatch } from 'react-redux'
import { setTrendingSwitch } from '@/store/slice/switchSlice'

interface ToggleData {
  data1: string
  data2: string
}
const Switcher = ({ toggleData }: { toggleData: ToggleData }) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()

  const handleCheckboxChange = () => {
    const trendingState = isChecked ? toggleData.data1 : toggleData.data2
    setIsChecked(!isChecked)
    dispatch(setTrendingSwitch(trendingState))
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
          {toggleData.data1}
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked
              ? 'bg-[#00ffff] rounded-[50px] text-gradient'
              : 'text-body-color'
          }`}>
          {toggleData.data2}
        </span>
      </label>
    </>
  )
}

export default Switcher
