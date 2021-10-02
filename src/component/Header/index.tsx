import React from 'react'
import { Typography } from 'antd'
import styles from './Header.module.css'

const { Title } = Typography

const Header = ({ isHaveData }: { isHaveData: boolean }): JSX.Element => {
  return (
    <div
      className={[styles.container, isHaveData ? styles.haveData : ''].join(
        ' '
      )}
    >
      <div className={styles.logo} />
      <Title className={styles.headerTitle} level={isHaveData ? 3 : 2}>
        Asteroids - NeoWs
      </Title>
    </div>
  )
}

export default Header
