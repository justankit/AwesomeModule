// export default {
//   multiply(a: number, b: number) {
//     return Promise.resolve(a * b);
//   },
// };

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AwesomeModuleProps {}

const AwesomeModule = ({}: AwesomeModuleProps) => {
  return (
    <View style={styles.container}>
      <Text>AwesomeModule</Text>
    </View>
  );
};

export default AwesomeModule;

const styles = StyleSheet.create({
  container: {},
});
