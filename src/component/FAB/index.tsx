import { Button } from 'antd'
import React, { useState } from 'react'
import { BulbFilled, BulbOutlined } from '@ant-design/icons'
import styles from './FAB.module.css'
import { THEMES } from '../../config/constants'

const FAB = (): JSX.Element => {
  const [isActive, setActive] = useState<boolean>(false)

  const changeTheme = (value: string | null): void => {
    if (value) {
      if (value === THEMES.DARK_THEME) {
        document.documentElement.setAttribute('data-theme', THEMES.DARK_THEME)
      }
      if (value === THEMES.LIGHT_THEME) {
        document.documentElement.setAttribute('data-theme', THEMES.LIGHT_THEME)
      }
    } else {
      document.documentElement.setAttribute('data-theme', THEMES.LIGHT_THEME)
    }
  }

  const toggleTheme = (): void => {
    changeTheme(!isActive ? THEMES.DARK_THEME : THEMES.LIGHT_THEME)
    setActive(!isActive)
  }

  return (
    <div className={styles.container}>
      <Button
        className={[styles.fabContainer, isActive ? styles.dark : ''].join(' ')}
        size="large"
        onClick={toggleTheme}
        shape="circle"
        icon={
          isActive ? (
            <BulbFilled style={isActive ? { fill: 'white' } : {}} />
          ) : (
            <BulbOutlined />
          )
        }
      />
    </div>
  )
}

export default FAB
