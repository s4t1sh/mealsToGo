
import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;
