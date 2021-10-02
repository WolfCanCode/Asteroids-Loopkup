import React from 'react'
import { AsteroidItemType } from 'services/AsteroidServices/interface'
import { Card, Col, Row, Skeleton } from 'antd'
import coverCard from 'assets/images/coverCard.jpeg'
import greyBg from 'assets/images/greyBg.png'
import styles from './AsteroidItem.module.css'

const { Meta } = Card

const AsteroidItem = ({
  data,
  onClick,
}: {
  data: AsteroidItemType
  onClick: () => void
}): JSX.Element => {
  return (
    <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
      <Card
        onClick={onClick}
        className={styles.container}
        hoverable
        cover={<img alt="cover" src={coverCard} />}
      >
        <Meta
          title={data.name}
          description={
            <span>
              <strong>Diameter:</strong>
              <br />
              <strong>Min:</strong>{' '}
              {data.estimatedDiameter.kilometers.estimatedDiameterMin} (KM)
              <br />
              <strong>Max:</strong>{' '}
              {data.estimatedDiameter.kilometers.estimatedDiameterMax} (KM)
            </span>
          }
        />
      </Card>
    </Col>
  )
}

export const LoadingSkeleton = (): JSX.Element => {
  return (
    <Row gutter={[16, 16]} className={styles.skeWidth}>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
      <Col xl={{ span: 4 }} md={{ span: 12 }} sm={{ span: 24 }}>
        <Card cover={<img alt="greyBg" src={greyBg} />}>
          <Skeleton loading active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Col>
    </Row>
  )
}

export default AsteroidItem
