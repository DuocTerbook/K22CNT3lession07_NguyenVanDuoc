import React, { useContext } from 'react'
import { ThemeContext } from './NvdUseContext'

export default function NvdUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>NvdUseContext2</h2>
      <p>
        <b>2210900016</b>
        <b>Nguyễn Văn Được</b>
        <i>K22CNT3</i>
      </p>
    </div>
  )
}
