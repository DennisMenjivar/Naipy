import { StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { View } from '../components/Themed';
import CardsComponent from '../components/CardsComponent';
import cards from '../json/cards';
import { useLoadedAssets } from '../hooks/useLoadedAssets';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';

export default function HomeComponent() {
  const {
    leftCard,
    setLeftCard,
    rightCard,
    setRightCard,
    counter,
    setCounter,
  } = useLoadedAssets();

  const [alert, setAlert] = useState({ active: false, msg: '', subMsg: '' });

  const determineLessThan = () => {
    const tempRightCard = { ...rightCard };
    if (leftCard.card.value > rightCard.card.value) {
      tempRightCard.hide = false;
      setLeftCard(tempRightCard);
      setRightCard({
        card: cards[Math.floor(Math.random() * cards.length)],
        hide: true,
      });
      setCounter(counter + 1);
    } else if (leftCard.card.value === rightCard.card.value) {
      tempRightCard.hide = false;
      setLeftCard(tempRightCard);
      setRightCard({
        card: cards[Math.floor(Math.random() * cards.length)],
        hide: true,
      });
    } else {
      tempRightCard.hide = false;
      setRightCard(tempRightCard);
      setAlert({
        active: true,
        msg: `${rightCard.card.name} is grater than ${leftCard.card.name}`,
        subMsg: `You won ${counter} ${counter > 1 ? 'times.' : 'time.'}`,
      });
    }
  };

  const determineGreaterThan = () => {
    const tempRightCard = { ...rightCard };
    if (leftCard.card.value < rightCard.card.value) {
      tempRightCard.hide = false;
      setLeftCard(tempRightCard);
      setRightCard({
        card: cards[Math.floor(Math.random() * cards.length)],
        hide: true,
      });
      setCounter(counter + 1);
    } else if (leftCard.card.value === rightCard.card.value) {
      tempRightCard.hide = false;
      setLeftCard(tempRightCard);
      setRightCard({
        card: cards[Math.floor(Math.random() * cards.length)],
        hide: true,
      });
    } else {
      tempRightCard.hide = false;
      setRightCard(tempRightCard);
      setAlert({
        active: true,
        msg: `${rightCard.card.name} is less than ${leftCard.card.name}`,
        subMsg: `You won ${counter} ${counter > 1 ? 'times.' : 'time.'}`,
      });
    }
  };
  const { active, msg, subMsg } = alert;

  return (
    <View style={styles.container}>
      <Image
        source={require('../imgs/NaipyBackground.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <Text style={styles.icon}>
          🥃
          <Text style={styles.counter}>x{counter}</Text>
        </Text>
      </View>
      <View style={styles.cardsContainter}>
        <CardsComponent children={{ leftCard, rightCard }}></CardsComponent>
      </View>
      <View style={styles.footer}>
        {/* LESS THAN BUTTON */}
        <View style={styles.buttonRow}>
          <Button
            onPress={() => determineLessThan()}
            buttonStyle={styles.button}
            title={(res) => {
              return <Text style={styles.textButton}>{'< Less than'}</Text>;
            }}
          />
        </View>
        {/* GREATER THAN */}
        <View style={styles.buttonRow}>
          <Button
            onPress={() => determineGreaterThan()}
            buttonStyle={styles.button}
            title={(res) => {
              return <Text style={styles.textButton}>{'> Greater than'}</Text>;
            }}
          />
        </View>
      </View>
      <AwesomeAlert
        show={active}
        showProgress={false}
        title={`${msg}`}
        message={`${subMsg}`}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        // showCancelButton={true}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText="Thank you!"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          setLeftCard(rightCard);
          setRightCard({
            card: cards[Math.floor(Math.random() * cards.length)],
            hide: true,
          });
          setAlert({ active: false, msg: '' });
          setCounter(1);
        }}
        onConfirmPressed={() => {
          setLeftCard(rightCard);
          setRightCard({
            card: cards[Math.floor(Math.random() * cards.length)],
            hide: true,
          });
          setAlert({ active: false, msg: '' });
          setCounter(1);
        }}
        contentContainerStyle={{
          width: '100%',
        }}
        titleStyle={{
          fontWeight: 'bold',
        }}
        confirmButtonStyle={{
          margin: '5%',
        }}
        confirmButtonTextStyle={{
          margin: '15%',
          textAlign: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%',
  },
  header: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainter: {
    width: '100%',
    height: '70%',
  },
  footer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonRow: {
    width: '49.80%',
    height: '100%',
    flexDirection: 'col',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    margin: 0.5,
    opacity: 0.4,
    backgroundColor: 'white',
  },
  textButton: {
    color: '#053A2B',
    fontSize: 20,
  },
  counter: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
