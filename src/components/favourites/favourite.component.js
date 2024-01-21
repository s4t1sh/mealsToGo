import React, {useContext} from 'react'
import styled from 'styled-components/native'
import {FavouritesContext} from '../../services/favourites/favourites.context'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const FavouriteBtn = styled(TouchableOpacity)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
`;
const Favourite = ({restaurant}) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext)
    const isFavourite = favourites.find((favourite) => favourite.placeId === restaurant.placeId)

  return (
    <FavouriteBtn onPress={()=> !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}>
        <AntDesign
            name={isFavourite ? 'heart' : 'hearto'}
            color={isFavourite ? 'red' : 'white'}
            size={30}
        />
    </FavouriteBtn>
  )
}

export default Favourite
