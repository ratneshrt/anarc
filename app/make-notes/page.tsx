import {
    Form, 
    FormControl,
    FormField, 
    FormItem, 
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Tiptap from "../component/TipTap/TipTap"
import { getServerSession } from "next-auth"

export default async function Home(){
    const session = await getServerSession()
    return (
    <main className="">
        Hello
        <Tiptap session={session}></Tiptap>
    </main>
)
}