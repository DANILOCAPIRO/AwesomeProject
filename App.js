import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import NavigationStak from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';




export default function App(){
  return <NavigationContainer>
    {/*<NavigationStak />*/}
    {/*<NavigationTab/>*/}
    <NavigationDrawer/>
  </NavigationContainer>
}

const styles = StyleSheet.create({

NavigationContainer : {
  flex : 1,
  backgroundColor : "#FFF",
  alignItems : "center",
  justifyContent : "center",
}

})


/*
export default function App() {
  return (
                <NavigationContainer>
    <View style={styles.container}>
      <Text>hola como esta? </Text>
      <Text>TEXTO</Text>
      <LoginForm/>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//in assets save icons*/