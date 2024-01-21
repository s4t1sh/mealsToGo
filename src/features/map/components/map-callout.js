import React from 'react'
import { CompactRestaurantInfo } from '../../../components/restaurant/map.compact-info'

const MapCallout = ({restaurant, Onpress}) => {
  return (
    <CompactRestaurantInfo restaurant={restaurant}/>
  )
}

export default MapCallout
