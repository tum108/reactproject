import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import HomePages from './pages/HomePages';
import Logins from './pages/Logins';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <Button  title="Learn More"  color="#841584"  accessibilityLabel="Learn more about this purple button"/>
      <HomePages />
      <Logins />
    </View>
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
