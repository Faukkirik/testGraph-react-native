import React from 'react';
import {StyleSheet, View} from "react-native";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";
import {VictoryNativeBrushLine} from "victory-native/src/components/victory-brush-line";
type GraphLineType = {
arrData?: any
} & VictoryNativeBrushLine
export const GraphLine = (props: GraphLineType) => {
    const {arrData, ...rest}=props
    return (
        <View style={styles.container}>
            <VictoryChart
                theme={VictoryTheme.material}
                minDomain={{y: 800}}
                maxDomain={{y: 1200}}
            >
                <VictoryLine
                    domain={{ y:[950 , 1050]}}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 150 }
                    }}
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={arrData}
                    {...rest}
                />
            </VictoryChart>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft:20
    },
});