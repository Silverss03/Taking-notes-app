import React, {useEffect, useLayoutEffect, useState} from 'react'
import {TextInput, Button, StyleSheet} from 'react-native'
import { getNote, saveNote } from '../services/NoteStoreService'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../types'
import { SaveNote } from './SaveNote'

type Props = {
    noteId : string | undefined
}

export const NoteTakingIntput : React.FC<Props> = ({noteId}) => {
    const [text, setText] = useState<string>("")
    const navigation = useNavigation<ScreenNavigationProp>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft : () => (<SaveNote text= {text} id = {noteId || ""}/>)
        })
    }, [navigation, text, noteId])

    useEffect(() => {
        if(noteId){
            getNote(noteId).then(result => setText(result?.text || ""))
        }
    }, [noteId])

    return(
        <>
            <TextInput 
            multiline = {true} 
            style = {styles.TextInput}
            value={text}
            onChangeText={setText}
            autoFocus = {true}/>
        </>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor : "#ffb70342", 
        width: "100%",
        flex : 1,
        fontSize : 16,
        paddingHorizontal : 20,
        paddingVertical : 20
    }
})