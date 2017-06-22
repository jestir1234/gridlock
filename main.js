import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class App extends React.Component {

  renderCircles(count){
    let grid = [];

    for (let i = 0; i < count; i++){
      grid.push(
        <TouchableOpacity
          key={i}
          style={styles.bullet}>
          <Icon
            name="circle"
            size={40}
            style={styles.circle}/>
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.grid}>
        {grid}
      </View>
    )
  }

  render() {

    let grid = this.renderCircles(16)
    return (
      <View style={styles.container}>
      <Image
        source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/c3/69/f7/c369f75e84f5841a52d55170f8da8946.png"}}
        style={styles.backgroundImage}
      />
    <View style={styles.modal}>
        {grid}
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 300,
    width: 300
  },
  modal: {
    position: "absolute",
    alignSelf: "stretch",
    height: 700,
    opacity: .6,
    backgroundColor: "black",
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  grid: {
    position: "absolute",
    zIndex: 3,
    backgroundColor: '#171461',
    top: 200,
    left: 10,
    bottom: 200,
    right: 10,
    flexDirection: 'row',
    flexWrap: "wrap",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    color: 'white'
  },
  bullet: {
    zIndex: 5,
    height: 80,
    width: 80,
    alignItems: "center"
  }
});

Expo.registerRootComponent(App);
