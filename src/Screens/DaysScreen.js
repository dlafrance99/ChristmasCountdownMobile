import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Header from '../Components/Header';
import CountdownOptions from '../Components/CountdownOptions';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import Spacer from '../Components/Spacer';

const DaysScreen = () => {
    return (
        <>
            <View style={styles.wrapper}>
                <Header />

                <CountdownOptions />

                <Spacer />
                <Spacer />
                <Spacer />

                <CountdownSubtitle
                    title='Days'
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0c9547',
        flex: 1
    }
})

export default DaysScreen;