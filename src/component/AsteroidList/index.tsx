import React from 'react'
import { AsteroidData } from 'services/AsteroidServices/interface'
import { Row } from 'antd'
import styles from './AsteroidList.module.css'
import { convertDateStringToDate } from '../../config/utils'
import AsteroidItem from '../AsteroidItem'

const AsteroidList: ({
  data,
}: {
  data: AsteroidData | undefined
}) => JSX.Element = ({ data }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.placeHolderLength}>
        {data ? (
          <span>
            Found <strong>{data.elementCount}</strong> items about Near Earth
            Object
          </span>
        ) : (
          ''
        )}
      </div>
      {data?.nearEarthObjects
        ? Object.keys(data.nearEarthObjects).map((key) => (
            <div className={styles.asteroidListContainer} key={key}>
              <h2 className={styles.dateIndex}>
                {convertDateStringToDate(key)}
              </h2>
              <Row gutter={[16, 16]}>
                {data.nearEarthObjects[key].map((asteroid) => (
                  <AsteroidItem
                    onClick={() => {
                      window.open(asteroid.nasaJplUrl)
                    }}
                    data={asteroid}
                    key={asteroid.id}
                  />
                ))}
              </Row>
            </div>
          ))
        : ''}
    </div>
  )
}

export default AsteroidList
