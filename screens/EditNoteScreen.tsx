import React from "react";
import { NoteTakingIntput } from "../components/NoteTakingInput";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { saveNote } from "../services/NoteStoreService";

export const EditNoteScreen : React.FC = () => {
    
    return(
        <NoteTakingIntput saveNote={saveNote}/>
    )
}