import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home : undefined,
    NewNote : undefined,
}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>