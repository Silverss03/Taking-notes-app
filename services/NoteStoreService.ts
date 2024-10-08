import AsyncStorage from '@react-native-async-storage/async-storage'; 

export type Note = {
    text : string;
    id : string;
}

export type NoteStore = {
    notes : Array<Note> ;
}
const STORE_KEY = 'NOTE_STORES' ;

export const getAllNotes = async (): Promise<NoteStore> => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY)
    if(storeItem){
        const result = JSON.parse(storeItem) as NoteStore
        return result
    }
    return {notes : []}
}

export const getNote = async (id : string) => {
    const result = await getAllNotes() ;
    const note = result.notes.find(note => note.id === id)
    return note
}

export const saveNote = async (text : string, noteId : string | undefined) => {
    const noteStore = await getAllNotes() ;
    if(noteId){
        //edit note
        const noteIndex =  noteStore.notes.findIndex(note => note.id === noteId)
        noteStore.notes.splice(noteIndex, 1, {id : noteId, text : text})
    }else{
        const newNote = {id : Date.now().toString(), text : text}
        noteStore.notes.push(newNote)
    }

    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore))
}

export const deleteNote = async (noteId : string) => {
    const noteStore = await getAllNotes()
    const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)

    noteStore.notes.splice(noteIndex, 1)
    const newStore = JSON.stringify(noteStore)
    await AsyncStorage.setItem(STORE_KEY, newStore)
}