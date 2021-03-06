import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { View } from '../components/Themed';
import CardsComponent from '../components/CardsComponent';
import cards from '../json/cards';
import { useLoadedAssets } from '../hooks/useLoadedAssets';
// import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeComponent({ children }) {
  const navigation = useNavigation();

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
        msg: `${rightCard.card.name} is greater than ${leftCard.card.name}, `,
        subMsg: String(
          `${children.route.params?.option?.buttonMessage}${
            counter > 1 &&
            children.route.params?.option?.buttonMessage !== 'take off a cloth'
              ? 's.'
              : '.'
          }`
        )
          .replace('kisss', 'kisses')
          .replace('*', counter.toString()), //`, you won ${counter} ${counter > 1 ? 'times.' : 'time.'}`,
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
        msg: `${rightCard.card.name} is less than ${leftCard.card.name}, `,
        subMsg: String(
          `${children.route.params?.option?.buttonMessage}${
            counter > 1 &&
            children.route.params?.option?.buttonMessage !== 'take off a cloth'
              ? 's.'
              : '.'
          }`
        )
          .replace('kisss', 'kisses')
          .replace('*', counter.toString()),
      });
    }
  };
  const { active, msg, subMsg } = alert;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Naipy', { option: '', compo: 'game-option' })
        }
        style={styles.header}
      >
        <Text style={styles.icon}>
          {children.route.params?.option?.icon}
          <Text style={styles.counter}>x{counter}</Text>
          <Text
            style={{
              fontSize: 12,
              textAlignVertical: 'top',
            }}
          >
            {'\n'}
            {children.route.params?.option?.description}
          </Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.cardsContainter}>
        <CardsComponent children={{ leftCard, rightCard }}></CardsComponent>
      </View>
      {/* --DURING THE GAME-- */}
      {!active && (
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
                return (
                  <Text style={styles.textButton}>{'> Greater than'}</Text>
                );
              }}
            />
          </View>
        </View>
      )}
      {/* --WHILE IS LOADING TO CONTINUE-- */}
      {active && (
        <View style={styles.footerConfirm}>
          <Button
            onPress={() => {
              setLeftCard(rightCard);
              setRightCard({
                card: cards[Math.floor(Math.random() * cards.length)],
                hide: true,
              });
              setAlert({ active: false, msg: '' });
              setCounter(1);
            }}
            buttonStyle={styles.buttonConfirm}
            title={(res) => {
              return (
                <Text style={styles.textButtonConfirm}>
                  {msg}
                  {subMsg}
                </Text>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footerConfirm: {
    width: '100%',
    height: '15%',
  },
  buttonRow: {
    width: '49.80%',
    height: '100%',
    // flexDirection: 'col',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    margin: 0.5,
    opacity: 0.4,
    backgroundColor: 'white',
  },
  buttonConfirm: {
    width: '100%',
    height: '100%',
    margin: 0.5,
    opacity: 0.4,
    backgroundColor: 'red',
  },
  textButton: {
    color: '#053A2B',
    fontSize: 23,
    fontWeight: '500',
  },
  textButtonConfirm: {
    color: 'white',
    fontSize: 23,
  },
  counter: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 7,
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
});

{
  /* <AwesomeAlert
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
      /> */
}
