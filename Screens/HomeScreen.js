import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import {
  Button,
  Card,
  Title,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';

import { getNews } from '../features/news/newsSlice';

const HomeScreen = ({ navigation }) => {
  const {
    darkTheme,
    news: articles,
    authUser,
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const [endIndex, setEndIndex] = React.useState(10);

  if (!authUser) {
    return (
      <Provider>
        <Portal>
          <Modal
            visible={!authUser}
            contentContainerStyle={{
              backgroundColor: darkTheme ? '#282C35' : 'white',
              flex: 1,
              alignItems: 'center',
              padding: 20,
              margin: 10,
            }}
          >
            <Button
              color={darkTheme ? 'white' : 'red'}
              style={{
                borderWidth: 1,
                borderColor: 'red',
              }}
              onPress={() => navigation.navigate('Login')}
            >
              Please Login to continue
            </Button>
          </Modal>
        </Portal>
      </Provider>
    );
  }

  return (
    authUser && (
      <View
        style={{
          ...styles.container,
          backgroundColor: darkTheme ? '#282C35' : 'white',
        }}
      >
        <SafeAreaView
          style={{
            paddingTop: 10,
          }}
        >
          <ScrollView>
            <View>
              {articles &&
                articles.slice(0, endIndex).map((item, index) => (
                  <Card
                    onPress={() => navigation.navigate('Details', { item })}
                    style={{
                      ...styles.card,
                      backgroundColor: darkTheme ? '#282C35' : 'white',
                    }}
                    key={index}
                  >
                    <Card.Cover source={{ uri: item.urlToImage }} />
                    <Card.Content>
                      <Title
                        style={{
                          color: darkTheme ? 'white' : 'black',
                        }}
                      >
                        {item.title}
                      </Title>
                    </Card.Content>
                  </Card>
                ))}
            </View>
            {endIndex < 38 && (
              <View>
                <Button
                  color={darkTheme ? 'white' : ''}
                  style={{
                    marginTop: 5,
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    setEndIndex((prev) => prev + 10);
                  }}
                >
                  Load More
                </Button>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    marginTop: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
  },
});
