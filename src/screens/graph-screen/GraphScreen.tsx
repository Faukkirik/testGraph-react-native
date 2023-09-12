import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ButtonWithoutFeedback} from "../../components/ui/button/ButtonWithoutFeedback";
import {SettingSvg} from "../../svg/tab-svg/SettingSVG";

export const GraphScreen = () => {
    const [touch,setTouch]=useState('week')
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Графики</Text>
                <ButtonWithoutFeedback
                    icon={<SettingSvg/>}
                    style={{paddingBottom: 15}}
                    onPress={()=>alert('settings')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonWithoutFeedback
                    text={'День'}
                    style={touch === 'day' ? styles.buttonSelected : styles.button}
                    onPress={()=>setTouch('day')}
                />
                <ButtonWithoutFeedback
                    text={'Неделя'}
                    style={touch === 'week' ? styles.buttonSelected : styles.button}
                    onPress={()=>setTouch('week')}
                />
                <ButtonWithoutFeedback
                    text={'Месяц'}
                    style={touch === 'month' ? styles.buttonSelected : styles.button}
                    onPress={()=>setTouch('month')}
                />
                <ButtonWithoutFeedback
                    text={'Год'}
                    style={touch === 'year' ? styles.buttonSelected : styles.button}
                    onPress={()=>setTouch('year')}
                />
            </View>
            <View style={styles.graphContainer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        padding: 15,
    },
    headerContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //borderWidth: 1,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
    },
    buttonContainer: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        //borderWidth: 1,
    },
    button: {
        backgroundColor: '#cecece',
        padding: 10,
        borderRadius: 5,
    },
    buttonSelected: {
        backgroundColor: '#797979',
        padding: 10,
        borderRadius: 5,
    },
    graphContainer: {
        flex: 1,
        backgroundColor: '#dadada',
        borderRadius: 25,
    }
});
