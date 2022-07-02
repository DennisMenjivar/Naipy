import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from './src/components/HomeComponent';
import GameOptionsComponents from './src/components/GameOptionsComponents';

const HomeScreen = (children) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#053A2B',
      }}
    >
      <ImageBackground
        source={require('./src/imgs/NaipyBackground.jpg')}
        style={styles.backgroundImage}
      >
        {!children.route.params ? (
          <GameOptionScreen></GameOptionScreen>
        ) : (
          <HomeComponent></HomeComponent>
        )}
      </ImageBackground>
    </View>
  );
};

function GameOptionScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#053A2B',
      }}
    >
      <ImageBackground
        source={require('./src/imgs/NaipyBackground.jpg')}
        style={styles.backgroundImage}
      ></ImageBackground>
      <GameOptionsComponents></GameOptionsComponents>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Naipy"
          component={HomeScreen}
          options={{
            tabBarIcon: makeIconRender('rocket'),
            headerStyle: {
              backgroundColor: '#053A2B',
              opacity: 0.9,
              borderBottomColor: '#09503D',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: '#09503D',
              borderTopColor: '#09503D',
            },
          }}
        />
        {/* <Tab.Screen
          name="game-options"
          component={GameOptionScreen}
          options={{ tabBarIcon: makeIconRender('cog'), title: 'Game' }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
