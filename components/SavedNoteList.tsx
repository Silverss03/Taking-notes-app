import React , {useState} from "react";
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native' 
import { getAllNotes, getNote, Note } from "../services/NoteStoreService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

export const SavedNoteList = () => {
    const [notes, setNotes] = useState<Note[] >([])
    const navigation = useNavigation<ScreenNavigationProp>()
    useFocusEffect(() => {
        const fetchNotes = async() => {
            const result = await getAllNotes()
            setNotes(result.notes)
        }
        fetchNotes()
    })
    return(
        <View style = {styles.container}>
            <ScrollView>
                {notes.map(note => (
                    <Pressable key = {note.id} onPress = {() => navigation.navigate('EditNote', {noteId : note.id})}>
                        <View style = {styles.row}>
                            <Text key = {note.id} style = {styles.text}>
                                {note.text.length === 0 ? ('Empty Note') : note.text}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    row : {
        width : '100%',
        borderBottomWidth : 1,
        borderBottomColor : '#e6e6e6',
        alignSelf : 'center',
        height : 100,
        justifyContent : 'center',
        paddingHorizontal : 20
    },
    text : {
        paddingVertical : 20,
        width : '100%',
        fontSize : 16, 
    },
    container : {
        width : '100%',
        flex : 1
    }
})