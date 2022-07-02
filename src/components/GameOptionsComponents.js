import { StyleSheet, View, Text } from 'react-native';
import options from '../json/options';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
export default function GameOptionsComponents() {
  const navigation = useNavigation();

  const submit = () => {
    navigation.navigate('Naipy', { option: 'HomeScreen' });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: 'transparent' }]}>
        {options.map((opt, key) => (
          <View style={styles.option} key={key}>
            <Button
              onPress={() => submit()}
              buttonStyle={styles.button}
              title={
                <Text
                  style={{ color: '#053A2B', fontSize: 22, fontWeight: 'bold' }}
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
                </Text>
              }
            ></Button>
          </View>
        ))}
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
    backgroundColor: 'red',
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
