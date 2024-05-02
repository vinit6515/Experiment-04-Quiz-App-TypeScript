import { strings } from 'constant/strings';
import { Link } from 'react-router-dom';

interface INavProps {
    to: string;
}

export const Navbar = ({ to }: INavProps) => {
    return (
        <nav className="h-12 bg-lightBg shadow-sm flex justify-center items-center">
            <Link to={to} className="text-lightText hover:text-primary font-medium text-lg">
                {strings.appName}
            </Link>
        </nav>
    );
};
