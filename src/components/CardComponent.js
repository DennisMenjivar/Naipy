import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CardComponent({ children }) {
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    if (children?.card?.suit === 'hearts') {
      setSymbol('♥️');
    } else if (children?.card?.suit === 'diamonds') {
      setSymbol('♦️');
    } else if (children?.card?.suit === 'clubs') {
      setSymbol('♣️');
    } else if (children?.card?.suit === 'spades') {
      setSymbol('♠️');
    }
  }, [children]);
  if (children.hide)
    return (
      <View style={styles.hideCard}>
        <Text style={styles.numberTopHide}>N</Text>
        <Text style={styles.symbolHide}>❓</Text>
        <Text style={styles.numberBottomHide}>N</Text>
      </View>
    );
  if (children)
    return (
      <View style={styles.card}>
        <Text style={styles.numberTop}>{children?.card?.name}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.numberBottom}>{children?.card?.name}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: '15%',
    borderColor: 'black',
    borderWidth: 2,
  },
  hideCard: {
    width: '95%',
    backgroundColor: '#AD0804', //color de la carta
    opacity: 0.9,
    borderRadius: 16,
    padding: '15%',
    borderColor: '#09503D',
    borderWidth: 2,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  numberTop: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  numberTopHide: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#09503D',
    position: 'relative',
  },
  symbol: {
    fontSize: 50,
    textAlign: 'center',
    padding: '20%',
    fontWeight: 'bold',
  },
  symbolHide: {
    fontSize: 50,
    textAlign: 'center',
    padding: '20%',
    fontWeight: 'bold',
  },
  numberBottom: {
    transform: [{ rotate: '180deg' }],
    fontSize: 50,
    fontWeight: 'bold',
  },
  numberBottomHide: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#09503D',
    textAlign: 'right',
    textShadowColor: 'red',
  },
});
