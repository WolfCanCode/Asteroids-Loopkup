import { RangeValue } from 'rc-picker/lib/interface'
import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import { DatePicker, Typography } from 'antd'
import { DATE_FORMAT } from 'config/constants'
import styles from './DateRangeSearch.module.css'

const { RangePicker } = DatePicker
const { Title } = Typography

const DateRangeSearch: ({
  dateData,
  onChangeDateRange,
}: {
  dateData: RangeValue<Moment> | undefined
  onChangeDateRange: (
    values: RangeValue<moment.Moment>,
    formatString: [string, string]
  ) => void
}) => JSX.Element = ({ dateData, onChangeDateRange }) => {
  const [dates, setDates] = useState<RangeValue<Moment>>()
  const disabledDate = (current: Moment): boolean => {
    if (!dates || (dates && !dates.length)) {
      return false
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7
    const tooEarly = dates && dates[1] && dates[1].diff(current, 'days') > 7
    return Boolean(tooEarly || tooLate)
  }
  return (
    <div
      className={[styles.container, dateData ? styles.haveData : ''].join(' ')}
    >
      <Title className={styles.placeHolder} level={3}>
        Choose range that you want to search for:
      </Title>
      <RangePicker
        className={styles.dateRangePicker}
        format={DATE_FORMAT}
        onChange={onChangeDateRange}
        disabledDate={disabledDate}
        inputReadOnly
        size="large"
        allowClear
        autoFocus
        onCalendarChange={(val: RangeValue<Moment>) => setDates(val)}
        value={dateData}
      />
    </div>
  )
}

export default DateRangeSearch
