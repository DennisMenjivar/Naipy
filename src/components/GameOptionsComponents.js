import { StyleSheet, View, Text } from 'react-native';
import options from '../json/options';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';
import axiosClient from '../config/axiosClient';
import { useEffect, useState } from 'react';

export default function GameOptionsComponents() {
  const navigation = useNavigation();
  const [option, setOption] = useState([]);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/DennisMenjivar/Naipy/main/src/json/options.js';
    axiosClient
      .get(url, {
        'Content-Type': 'application/json',
      })
      .then((result) => {
        setOption(result.data);
        console.log(result.data);
      })
      .catch((error) => {});
  }, []);

  const submit = (gameOption) => {
    navigation.navigate('Naipy', { option: gameOption, compo: 'naipy' });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: 'transparent' }]}>
        <Text
          style={{
            color: 'white',
            padding: 10,
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: 10, height: 5 },
            textShadowRadius: 7,
          }}
        >
          ¿What do you want to play for?
        </Text>
        {/* {option?.map((opt, key) => (
          <View style={styles.option} key={key}>
            <Button
              onPress={() => submit(opt)}
              buttonStyle={styles.button}
              title={
                <Text
                  style={{
                    color: '#053A2B',
                    fontSize: 22,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {opt.name}
                  <Text
                    style={{
                      color: '#053A2B',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}
                  >
                    {opt.icon}
                  </Text>
                  {'\n'}
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: 17,
                      fontWeight: 'normal',
                      textAlign: 'center',
                    }}
                  >
                    {opt.description}
                  </Text>
                </Text>
              }
            ></Button>
          </View>
        ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 2,
    // flexDirection: 'col',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    width: '100%',
  },
  button: {
    padding: 30,
    marginBottom: 2,
    borderRadius: 0,
    opacity: 0.6,
    backgroundColor: 'white',
  },
});
