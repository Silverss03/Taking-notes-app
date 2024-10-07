import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button} from 'react-native'
import { ScreenNavigationProp } from "../types";
import { SavedNoteList } from "../components/SavedNoteList";

export const HomeScreen : React.FC = () => { 
    const navigation = useNavigation<ScreenNavigationProp>()

    return(
        <>
            <SavedNoteList/>
            <Button title = 'Create new note' onPress = {() => navigation.navigate('NewNote')}/>
        </>
    )
}

