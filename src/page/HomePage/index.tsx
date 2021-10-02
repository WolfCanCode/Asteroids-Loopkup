import React, { useEffect, useState } from 'react'
import { AsteroidServices } from 'services'
import { Moment } from 'moment'
import { RangeValue } from 'rc-picker/lib/interface'
import { AsteroidData } from 'services/AsteroidServices/interface'
import { DATE_FORMAT, STATUS_QUERY } from 'config/constants'
import { AsteroidList, DateRangeSearch, FAB, Header } from 'component'
import { LoadingSkeleton } from 'component/AsteroidItem'
import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
  const [data, setData] = useState<AsteroidData>()
  const [status, setStatus] = useState<STATUS_QUERY>(STATUS_QUERY.INITIALIZE)
  const [dateData, setDateData] = useState<RangeValue<Moment>>()

  const getListAsteroid: (from: string, to: string) => Promise<void> = async (
    from,
    to
  ) => {
    setStatus(STATUS_QUERY.LOADING)
    const response = await AsteroidServices.getList(from, to)
    setData(response)
    setStatus(STATUS_QUERY.DONE)
  }

  useEffect(() => {
    setTimeout(() => {
      if (dateData && dateData[0] && dateData[1]) {
        getListAsteroid(
          dateData[0].format(DATE_FORMAT),
          dateData[1].format(DATE_FORMAT)
        ).then()
      } else {
        setData(undefined)
      }
    }, 500)
  }, [dateData])

  const onChangeDateRange: (
    values: RangeValue<Moment>,
    formatString: [string, string]
  ) => void = (values) => {
    setDateData(values)
  }

  return (
    <div className={styles.container}>
      <Header isHaveData={Boolean(dateData)} />
      <DateRangeSearch
        dateData={dateData}
        onChangeDateRange={onChangeDateRange}
      />
      {(status === STATUS_QUERY.LOADING && <LoadingSkeleton />) || ''}
      {(status === STATUS_QUERY.DONE &&
        (dateData ? <AsteroidList data={data} /> : '')) ||
        ''}
      <FAB />

      <input
        data-testid="renderSuccessfully"
        type="hidden"
        placeholder="render successfully"
      />
    </div>
  )
}

export default HomePage
