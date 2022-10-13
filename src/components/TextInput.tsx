import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot"

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {

}

export type TextInputRootProps = {
    children: ReactNode;
}

export type TextInputIconProps = {
    children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputInputProps) => {
    return (
        <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full h-12 focus-within:ring-2 ring-cyan-300">
            {children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root"

const TextInputIcon = ({ children }: TextInputIconProps) => {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon"

const TextInputInput = (props: TextInputInputProps) => {

    return (
        <>
            <input className="bg-transparent flex-1 text-gray-100 text-xs 
            outline-none placeholder:text-gray-400"
                {...props}
            >

            </input>
        </>
    )
}

TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}