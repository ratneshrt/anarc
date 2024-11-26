import { getServerSession } from "next-auth";
import { authOptions } from "../lib/utils/auth";

export default async function Home(){
    const session = await getServerSession(authOptions)
    const id = session?.user.id
    return (
        <>
            <div>{id}</div>
        </>
    )
}