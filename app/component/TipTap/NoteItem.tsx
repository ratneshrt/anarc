import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export interface Note{
    id: string
    title: string
    content: any
    createdAt: string
}

const Noteitem = ({ note }: {note: Note}) => {

    const parsedContent = typeof note.content === "string" ? JSON.parse(note.content) : note.content

    const editor = useEditor({
        editable: false,
        extensions: [StarterKit],
        content: parsedContent,
    })

    return (
        <>
            <div className="text-4xl font-bold">{note.title}</div>
            <EditorContent editor={editor} />
            <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
        </>
    )
}

export default Noteitem