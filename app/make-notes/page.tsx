

import { getServerSession } from "next-auth";
import Tiptap from "../component/TipTap/TipTap";
import { authOptions } from "../lib/utils/auth";


export default async function Home(){
    const session = await getServerSession(authOptions)

    return (
        <>
            <Tiptap session={session}></Tiptap>  
        </>
    )
}