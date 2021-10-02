export interface AsteroidData {
  elementCount: number
  links: {
    next: string
    prev: string
    self: string
  }
  nearEarthObjects: {
    [date: string]: AsteroidItemType[]
  }
}

export type AsteroidItemType = {
  id: string
  name: string
  estimatedDiameter: {
    kilometers: {
      estimatedDiameterMax: number
      estimatedDiameterMin: number
    }
  }
  nasaJplUrl: string
}
