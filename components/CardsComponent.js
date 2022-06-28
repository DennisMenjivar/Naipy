import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CardComponent from './CardComponent';

export default function CardsComponent({ children }) {
  const { leftCard, rightCard } = children;

  useEffect(() => {}, [rightCard]);

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: 'red' }]}>
        <CardComponent children={leftCard}></CardComponent>
      </View>
      <View style={[styles.cardContainer, { backgroundColor: 'yellow' }]}>
        <CardComponent children={rightCard}></CardComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    width: '100%',
    height: '100%',
    flex: 2,
    flexDirection: 'col',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '49.80%',
    // height: '100%',
    margin: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
