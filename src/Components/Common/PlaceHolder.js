import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

// Consts and Libs

// Components

/* Component ==================================================================== */
const Placeholder = ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Placeholder.propTypes = { text: PropTypes.string };
Placeholder.defaultProps = { text: 'Coming soon...' };
Placeholder.componentName = 'Placeholder';

/* Export Component ==================================================================== */
export default Placeholder;
