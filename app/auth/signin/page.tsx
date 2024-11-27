import { LoginCard } from "@/app/component/LoginCard";
import { AuroraBackground } from "@/app/component/ui/Aurora-Background";

export default function Home(){
    return(
        <>
            <AuroraBackground>
                <LoginCard></LoginCard>
            </AuroraBackground>
        </>
    )
}