import React, {useState} from 'react'
import {TextInput, Button, StyleSheet} from 'react-native'

type Props = {
    saveNote : (text : string) => void
}

export const NoteTakingIntput : React.FC<Props> = ({saveNote}) => {
    const [text, setText] = useState<string>("")


    return(
        <>
            <TextInput multiline = {true} 
            style = {styles.TextInput}
            value={text}
            onChangeText={setText}/>
            <Button title = 'Save note' onPress = {() => saveNote(text)}/>
        </>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor : "#ffb70342", 
        height: 200,
        width: "100%",
        fontSize : 16,
        paddingHorizontal : 20,
        paddingVertical : 20
    }
})