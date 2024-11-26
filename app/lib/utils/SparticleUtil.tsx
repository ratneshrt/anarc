import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function scn(... inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}