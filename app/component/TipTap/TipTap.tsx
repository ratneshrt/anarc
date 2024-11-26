'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

const Tiptap = ({ session }: {session: any}) => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
        onUpdate: ({ editor }) => {
            setContent(JSON.stringify(editor.getJSON()))
        }
    })

    const handleSave = async() => {
        try{
            const res = await fetch('/api/notes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    userId: session?.user.id
                })
            })
            if(!res.ok){
                throw new Error(`Error occured ${res.status}`)
            }
        }catch(e){
            console.log(`Error: `, e)
        }
    }

    return (
        <>  
            <input className='bg-black' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <EditorContent editor={editor} />
            <button onClick={handleSave}>Save Note</button>
        </>
    )
    
}

export default Tiptap

