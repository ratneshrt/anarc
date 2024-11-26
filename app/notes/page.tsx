'use client';

import { useEffect, useState } from "react";
import Noteitem, { Note } from "../component/TipTap/NoteItem";

const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch('/api/notes/', {
                    method: 'GET'
                });
                if (!res.ok) {
                    throw new Error(`Failed to fetch notes: ${res.status}`);
                }
                const data = await res.json();
                console.log("API Response: ", data);
                // set Content
                if(Array.isArray(data.note)){
                    setNotes(data.note)
                }
            } catch(e){
                console.log('Error occured: ', e)
            }
        };
        fetchNotes();
    }, []);


    return (
        <>
            <div>{notes.map((note) => (
                    <Noteitem key={note.id} note={note} />
            ))}</div>
        </>
    )
};

export default NotesPage;
