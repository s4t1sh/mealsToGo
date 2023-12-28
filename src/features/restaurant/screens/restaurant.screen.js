import React, {useContext} from 'react'
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import RestaurantInfo from '../components/restaurant-info';
import { RestaurantContext } from '../../../services/restaurant/restautant.context';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: StatusBar.currentHeight,
      backgroundColor:  "#F1F1F1"
    },
    searchBar:{
      backgroundColor: 'white',
      marginBottom: 10
    },
  });

const RestaurantScreen = () => {
  const {restaurants, error , isLoading} = useContext(RestaurantContext);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar
        placeholder="Search"
        style= {styles.searchBar}
        elevation={3}
      />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return <RestaurantInfo restaurant={item}/>
      }}
      key={(item) => item.name}
      />

    </SafeAreaView>
  )
}

export default RestaurantScreen