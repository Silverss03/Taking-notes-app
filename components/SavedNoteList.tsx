import React , {useState} from "react";
import {View, Text} from 'react-native' 
import { getAllNotes, getNote, Note } from "../services/NoteStoreService";
import { useFocusEffect } from "@react-navigation/native";

export const SavedNoteList = () => {
    const [notes, setNotes] = useState<Note[]>([])

    useFocusEffect(() => {
        getAllNotes().then(result => setNotes(result.notes))
    })
    return(
        <>
            <View>
                {notes.map(note => (<Text key = {note.id}>{note.text}</Text>))}
            </View>
        </>
    )
}