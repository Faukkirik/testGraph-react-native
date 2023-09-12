import {NavigationProp, useNavigation} from "@react-navigation/native";


export type RootStack = {
    Graph: undefined
    Journal: undefined
    Main: undefined
}

export type NavigationUseType = NavigationProp<RootStack>
export const useAppNavigation = () => useNavigation<NavigationUseType>()