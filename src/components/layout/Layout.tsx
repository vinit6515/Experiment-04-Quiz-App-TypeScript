import { Navbar } from './Navbar';

interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className="bg-bg min-h-screen">
            <Navbar to={'/'} />
            <main className="p-3 md:p-5">{children}</main>
        </div>
    );
};
