import { Layout, LinkButton } from 'components';
import { strings } from 'constant/strings';

export const FourOhFour = () => {
    return (
        <Layout>
            <div className="flex flex-col space-y-1 justify-center items-center py-12 md:py-24 text-center">
                <h1 className="text-red-500 font-medium uppercase">404 Error</h1>
                <h1 className="font-bold text-3xl text-gray-700">{strings.not_found}</h1>
                <p className="text-sm pb-5 text-gray-400">{strings.not_found_desc}</p>
                <LinkButton to="/" text={strings.go_back} />
            </div>
        </Layout>
    );
};
