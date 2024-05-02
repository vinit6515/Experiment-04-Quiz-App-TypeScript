import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input = ({ name, ...rest }: IInputProps) => {
    return (
        <input
            name={name}
            className="my-2.5 bg-transparent flex-1 border rounded focus:outline-none focus:border-gray-600 p-1 text-xs"
            {...rest}
        />
    );
};
