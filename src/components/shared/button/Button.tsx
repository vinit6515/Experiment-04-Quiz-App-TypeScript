interface IButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({ text, onClick = () => null, disabled = false, ...rest }: IButtonProps) => {
    return (
        <button
            className="bg-primary text-white px-3 py-1.5 rounded-sm disabled:opacity-50"
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
};
