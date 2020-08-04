import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AwesomeModule from 'react-native-awesome-module';
export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  // React.useEffect(() => {
  //   AwesomeModule.multiply(3, 7).then(setResult);
  // }, []);
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(AwesomeModule, null)
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
