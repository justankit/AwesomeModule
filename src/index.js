// export default {
//   multiply(a: number, b: number) {
//     return Promise.resolve(a * b);
//   },
// };
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const AwesomeModule = ({}) => {
    return (React.createElement(View, { style: styles.container },
        React.createElement(Text, null, "AwesomeModule")));
};
export default AwesomeModule;
const styles = StyleSheet.create({
    container: {},
});
