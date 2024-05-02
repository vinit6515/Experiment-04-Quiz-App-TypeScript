import { SpinnerIcon } from 'assets/icons';

interface ISpinnerProps {
    fullPage?: boolean;
}

export const Spinner = ({ fullPage = false }: ISpinnerProps) => {
    return (
        <div className={`${fullPage ? 'flex min-h-screen justify-center items-center' : ''}`}>
            <SpinnerIcon />
        </div>
    );
};
