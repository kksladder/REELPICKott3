import { div } from "three/tsl";

export const SquareNextBtn = (props) => {
    return (
        <div
            style={{
                backdropFilter: "blur(15px)",
                cursor: "pointer",
            }}
            onClick={props.onClick}
        >
            <svg width="28" height="72" viewBox="0 0 28 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bdi_2058_5697)">
                    <rect
                        width="64"
                        height="20"
                        rx="5"
                        transform="matrix(-9.93477e-08 1 1 9.93477e-08 4 4)"
                        fill="url(#paint0_linear_2058_5697)"
                        shape-rendering="crispEdges"
                    />
                    <rect
                        x="0.125"
                        y="0.125"
                        width="63.75"
                        height="19.75"
                        rx="4.875"
                        transform="matrix(-9.93477e-08 1 1 9.93477e-08 4 4)"
                        stroke="url(#paint1_linear_2058_5697)"
                        stroke-opacity="0.7"
                        stroke-width="0.25"
                        shape-rendering="crispEdges"
                    />
                </g>
                <g filter="url(#filter1_d_2058_5697)">
                    <path
                        d="M13 39L15.2929 36.7071C15.6834 36.3166 15.6834 35.6834 15.2929 35.2929L13 33"
                        stroke="#F59C04"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_bdi_2058_5697"
                        x="0"
                        y="0"
                        width="28"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2058_5697" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.694118 0 0 0 0 0.231373 0 0 0 0.1 0" />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_2058_5697"
                            result="effect2_dropShadow_2058_5697"
                        />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2058_5697" result="shape" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.768627 0 0 0 0 0.231373 0 0 0 0.231373 0"
                        />
                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2058_5697" />
                    </filter>
                    <filter
                        id="filter1_d_2058_5697"
                        x="10.25"
                        y="30.25"
                        width="8.08594"
                        height="11.5"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_5697" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_5697" result="shape" />
                    </filter>
                    <linearGradient
                        id="paint0_linear_2058_5697"
                        x1="-20.8"
                        y1="-8"
                        x2="2.44431"
                        y2="58.3405"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#A67E34" stop-opacity="0.26" />
                        <stop offset="0.505208" stop-color="#FFC558" stop-opacity="0.12" />
                        <stop offset="1" stop-color="#FFD382" stop-opacity="0.04" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_2058_5697"
                        x1="1.6"
                        y1="3"
                        x2="12.9974"
                        y2="34.2614"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" stop-opacity="0.15" />
                        <stop offset="1" stop-color="white" stop-opacity="0.44" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
export const SquarePreveBtn = (props) => {
    return (
        <div
            style={{
                backdropFilter: "blur(15px)",
            }}
            onClick={props.onClick}
        >
            <svg width="28" height="72" viewBox="0 0 28 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bdi_2058_5701)">
                    <rect
                        width="64"
                        height="20"
                        rx="5"
                        transform="matrix(-9.93477e-08 1 1 9.93477e-08 4 4)"
                        fill="url(#paint0_linear_2058_5701)"
                        shape-rendering="crispEdges"
                    />
                    <rect
                        x="-0.125"
                        y="-0.125"
                        width="63.75"
                        height="19.75"
                        rx="4.875"
                        transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 23.75 67.75)"
                        stroke="url(#paint1_linear_2058_5701)"
                        stroke-opacity="0.7"
                        stroke-width="0.25"
                        shape-rendering="crispEdges"
                    />
                </g>
                <g filter="url(#filter1_d_2058_5701)">
                    <path
                        d="M15 33L12.7071 35.2929C12.3166 35.6834 12.3166 36.3166 12.7071 36.7071L15 39"
                        stroke="#F59C04"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_bdi_2058_5701"
                        x="0"
                        y="0"
                        width="28"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2058_5701" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.694118 0 0 0 0 0.231373 0 0 0 0.1 0" />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_2058_5701"
                            result="effect2_dropShadow_2058_5701"
                        />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2058_5701" result="shape" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.768627 0 0 0 0 0.231373 0 0 0 0.231373 0"
                        />
                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2058_5701" />
                    </filter>
                    <filter
                        id="filter1_d_2058_5701"
                        x="9.66406"
                        y="30.25"
                        width="8.08594"
                        height="11.5"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_5701" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_5701" result="shape" />
                    </filter>
                    <linearGradient
                        id="paint0_linear_2058_5701"
                        x1="-20.8"
                        y1="-8"
                        x2="2.44431"
                        y2="58.3405"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#A67E34" stop-opacity="0.26" />
                        <stop offset="0.505208" stop-color="#FFC558" stop-opacity="0.12" />
                        <stop offset="1" stop-color="#FFD382" stop-opacity="0.04" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_2058_5701"
                        x1="1.6"
                        y1="3"
                        x2="12.9974"
                        y2="34.2614"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" stop-opacity="0.15" />
                        <stop offset="1" stop-color="white" stop-opacity="0.44" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
