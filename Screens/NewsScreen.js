import React from 'react';
import { useSelector } from 'react-redux';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewsScreen = ({ route }) => {
  const { darkTheme } = useSelector((state) => state.news);
  const { item } = route.params;
  return (
    <View
      style={{
        position: 'relative',
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: '35%', resizeMode: 'cover', width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? '#282C35' : 'white',
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? 'white' : 'black' }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? 'white' : 'black' }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? 'white' : 'black' }}>
          Short by
          <Text style={{ fontWeight: 'bold' }}>
            {' '}
            {item.author ?? 'unknown'}
          </Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 15, color: 'white' }}>
            '{item?.content?.slice(0, 45)}...'
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 100,
    width: windowWidth,
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#d7be69',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
