import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 11.5018C20.2304 11.8228 19.3859 12 18.5 12C14.9101 12 12 9.08985 12 5.5C12 4.6141 12.1772 3.76959 12.4982 3H5C3.34315 3 2 4.34315 2 6V19C2 20.6569 3.34315 22 5 22H18C19.6569 22 21 20.6569 21 19V11.5018Z"
                fill="#DDE3E8"
            />
            <circle cx={18.5} cy={5.5} r={4.5} fill="#FF7D95" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'badge');
export default IconComponent;
