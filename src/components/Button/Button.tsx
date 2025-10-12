import { BASE_URL } from '../../data';
import { FC, MouseEvent } from 'react';

interface ButtonProps {
    text: string;
    gid: number;
}

const Button: FC<ButtonProps> = ({ text, gid }) => {
    const handleMouseOver = (e: MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.className = '';
    };

    const handleMouseOut = (e: MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.className = 'outline';
    };

    return (
        <a
            href={`${BASE_URL + gid}`}
            target='_blank'
            rel='noreferrer'
            role={'button'}
            className={'outline'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {text}
        </a>
    );
};

export default Button;
