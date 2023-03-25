import React from 'react'
import styles from "./Design.module.css"


declare interface Props {
  theme: string
  color1: string
  color2: string
  color3: string
}
const CustomDropdownItem = ({ theme , color1 , color2 , color3 }: Props) => {
  return (
    <div className={styles.dropdownItemMainComp}>
      <div className={styles.colorBallsParentDiv}>
        <div className={styles.colorBalls} style={{background:color1}}></div>
        <div className={styles.colorBalls}  style={{background:color2}}></div>
        <div className={styles.colorBalls}  style={{background:color3}}></div>
      </div>

      <span>{theme}</span>
    </div>
  )
}

export default CustomDropdownItem;