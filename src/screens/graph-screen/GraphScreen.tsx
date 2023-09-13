import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ButtonWithoutFeedback} from "../../components/ui/button/ButtonWithoutFeedback";
import {SettingSvg} from "../../svg/tab-svg/SettingSVG";
import {GraphLine} from "../../components/ui/graph/GraphLine";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {selectedData} from "../../store/root/root";

export const GraphScreen = () => {
    const dispatch = useAppDispatch()
    const arrData = useAppSelector((state)=>state.root.arrData)
    const touch = useAppSelector((state)=>state.root.touchData)
    const previewData = touch==='day' ? arrData.day : touch === 'week' ? arrData.week : touch === 'month' ? arrData.month : touch === 'year' ? arrData.year : arrData.week
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Графики</Text>
                <ButtonWithoutFeedback
                    icon={<SettingSvg/>}
                    style={{paddingBottom: 15}}
                    onPress={() => alert('settings')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonWithoutFeedback
                    text={'День'}
                    style={touch === 'day' ? styles.buttonSelected : styles.button}
                    onPress={() => dispatch(selectedData('day'))}
                />
                <ButtonWithoutFeedback
                    text={'Неделя'}
                    style={touch === 'week' ? styles.buttonSelected : styles.button}
                    onPress={() => dispatch(selectedData('week'))}
                />
                <ButtonWithoutFeedback
                    text={'Месяц'}
                    style={touch === 'month' ? styles.buttonSelected : styles.button}
                    onPress={() => dispatch(selectedData('month'))}
                />
                <ButtonWithoutFeedback
                    text={'Год'}
                    style={touch === 'year' ? styles.buttonSelected : styles.button}
                    onPress={() => dispatch(selectedData('year'))}
                />
            </View>
            <View style={styles.graphContainer}>
                <GraphLine
                    arrData={previewData}
                />
            </View>
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
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
