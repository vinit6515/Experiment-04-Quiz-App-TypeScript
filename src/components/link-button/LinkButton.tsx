import { Button } from 'components/shared/button/Button';
import { Link, LinkProps } from 'react-router-dom';

interface ILinkButtonProps extends LinkProps {
    text: string;
    to: string;
}

export const LinkButton = (props: ILinkButtonProps) => {
    const { text, to, ...rest } = props;
    return (
        <Link to={to} {...rest}>
            <Button text={text} onClick={() => null} />
        </Link>
    );
};
