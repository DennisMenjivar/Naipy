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
        <Text style={styles.numberTop}>N</Text>
        <Text style={styles.symbol}>.</Text>
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
    backgroundColor: 'white',
    borderRadius: '7%',
    padding: '15%',
    borderColor: 'black',
    borderWidth: 2,
    // maxHeight: '100%',
  },
  hideCard: {
    width: '95%',
    backgroundColor: 'red',
    borderRadius: '7%',
    padding: '15%',
    borderColor: 'black',
    borderWidth: 2,
  },
  numberTop: {
    fontSize: 50,
    fontWeight: 'bold',
    // fontFamily: 'Lucida Console", "Courier New", monospace',
  },
  symbol: {
    fontSize: 50,
    textAlign: 'center',
    padding: '20%',
  },
  numberBottom: {
    transform: [{ rotate: '180deg' }],
    fontSize: 50,
    fontWeight: 'bold',
    // fontFamily: 'Lucida Console", "Courier New", monospace',
  },
  numberBottomHide: {
    fontSize: 50,
    fontWeight: 'bold',
    // fontFamily: 'Lucida Console", "Courier New", monospace',
    color: 'red',
  },
});
