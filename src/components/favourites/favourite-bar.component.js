import React from 'react'
import { Text,View, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../restaurant/map.compact-info'
import { Spacer } from '../spacer/spacer.component'

const FavoutiteWrapper = styled.View`
  padding: 10px;
`

const FavoutiteBar = ({favourites, onNavigate}) => {
  if(!favourites.length){
    return null;
  }

  return (
   <FavoutiteWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {favourites.map((restaurant)=>{
      return (
        <Spacer key={restaurant.name} position='left' size='medium'>
          <TouchableOpacity onPress={() => onNavigate('Restaurant Details', {restaurant})}>
            <CompactRestaurantInfo restaurant={restaurant} isFavouriteContent={true}/>
          </TouchableOpacity>
        </Spacer>
      )
    })}
    </ScrollView>
   </FavoutiteWrapper>
  )
}

export default FavoutiteBar