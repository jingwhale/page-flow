// @flow
import * as React from 'react';
import { View, Text, StyleSheet} from 'react-sketchapp';

const SWATCH_WIDTH = 130;
const SWATCH_HEIGHT = 20;


const styles = StyleSheet.create({
    view: {
        width: SWATCH_WIDTH,
        height: SWATCH_HEIGHT,
        backgroundColor:"#fff"
    },
    text: {
        fontSize: 16,
        border:"1px solid #000"
    },
});

const Swatch = ({ item }) => (
    <View name={item.name} style={styles.view}
    >
        <Text style={styles.text}>{item.name}</Text>
    </View>
);

export default Swatch;
