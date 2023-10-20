import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [img, setImg] = useState(' ')

  const getCat = () => {
    fetch('https://aws.random.cat/meow')
    .then((res) => {
        return console.log(res.json())
    })
    .then((data) => {
      setImg(data.link)
      console.log(data)
    })
    .catch(function(error) {
       console.log('There has been a problem with your fetch operation: ' + error.message);
       });
  }

  useEffect(() => {
    return getCat()
  }, [])

  return (
    <View style={styles.container}>
        <Image 
          style={styles.img}
          source={{uri: img}}
        />
      <Text>Seydou The best!</Text>
      <Button
      onPress={getCat}
      title="Nouveau Chat"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '50%',
    backgroundColor: 'red'
  }
});
