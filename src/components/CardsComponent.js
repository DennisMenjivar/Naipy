import { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import CardComponent from './CardComponent';

export default function CardsComponent({ children }) {
  const { leftCard, rightCard } = children;

  useEffect(() => {}, [rightCard]);

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: 'transparent' }]}>
        <Image
          source={require('../imgs/WhiteCardBackground.jpg')}
          style={styles.backgroundImage}
        />
        <CardComponent children={leftCard}></CardComponent>
      </View>
      <View style={[styles.cardContainer, { backgroundColor: 'transparent' }]}>
        <Image
          source={require('../imgs/WhiteCardBackground.jpg')}
          style={styles.backgroundImage}
        />
        <CardComponent children={rightCard}></CardComponent>
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
    flexDirection: 'col',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '49.80%',
    margin: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '95%',
    borderRadius: '7%',
    height: '100%',
    position: 'absolute',
  },
});
