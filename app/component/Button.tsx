import React from "react"

interface ButtonProps{
    label: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({ onClick, label }: ButtonProps){
    return(
        <>
            <button className="bg-blue-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-blue-800" onClick={onClick}>
                    {label} ➛
            </button>
        </>
    )
}