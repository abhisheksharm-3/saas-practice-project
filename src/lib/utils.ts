import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]){
    //twMerge to merge redundant tailwind classes and clsx to remove conflicts
    return twMerge(clsx(inputs))
}