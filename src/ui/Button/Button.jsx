import { useState } from "react";
import styled from "styled-components";


const ButtonInner = styled.button`
    display: flex;
    width: ${({ width }) => width || 'auto'};
    height: 56px;
    padding: 19px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--main-orange-light-active, #fce0b1);
    margin-top: 8px;
    margin-bottom: 18px;
    &:hover {
        background-color: #f59c04;
    }
`;

const Button = ({ title, width }) => {
    return (
        <>
            <ButtonInner type="submit" width={width}>
                {title}
            </ButtonInner>
        </>
    );
};

export default Button;

//새로고침 버튼

export const RestartLg = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "fit-content", // SVG와 동일한 크기
                height: "fit-content", // SVG와 동일한 크기
                backdropFilter: "blur(15px)",
                cursor: "pointer",

                borderRadius: "50%",
            }}
        >
            <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7390)">
                    <rect width="98" height="100" rx="49" fill="#DBDBDB" fillOpacity="0.25098" />
                    <g clipPath="url(#clip0_4_7390)">
                        <path
                            d="M57.3185 41.6815C55.0068 39.2842 51.839 38 48.5 38C45.5034 38 42.5925 39.0274 40.3664 40.9966L37.9692 38.5993L37.4555 46.8185L45.8459 46.2192L43.4486 44.0788C44.9041 42.9658 46.6164 42.3664 48.5 42.3664C53.0377 42.3664 56.7192 46.0479 56.7192 50.5856C56.7192 55.1233 53.0377 58.8048 48.5 58.8048C46.4452 58.8048 44.476 58.0342 42.9349 56.5788C41.3938 55.2089 40.5377 53.2397 40.3664 51.1849L40.2808 50.5H36L36.0856 51.2705C36.4281 57.863 41.9075 63 48.5 63C51.839 63 55.0068 61.7158 57.3185 59.3185C59.7158 56.9212 61 53.839 61 50.5C61 47.161 59.7158 43.9932 57.3185 41.6815Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7390"
                        x="-30"
                        y="-30"
                        width="158"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7390" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7390" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7390">
                        <rect width="32" height="26" fill="white" transform="translate(33 37)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export const RestartMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7364)">
                    <rect width="56" height="56" rx="28" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <g clip-path="url(#clip0_4_7364)">
                    <g clip-path="url(#clip1_4_7364)">
                        <g clip-path="url(#clip2_4_7364)">
                            <path d="M37.8 28L22.2 37V19L37.8 28Z" fill="black" />
                        </g>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7364"
                        x="-30"
                        y="-30"
                        width="116"
                        height="116"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7364" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7364" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7364">
                        <rect width="16" height="18" fill="white" transform="translate(22 19)" />
                    </clipPath>
                    <clipPath id="clip1_4_7364">
                        <rect width="16" height="18" fill="white" transform="translate(22 19)" />
                    </clipPath>
                    <clipPath id="clip2_4_7364">
                        <rect width="15.6" height="18" fill="white" transform="translate(22.2 19)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const RestartS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_541_4954)">
                    <rect width="32" height="32" rx="16" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <g clip-path="url(#clip0_541_4954)">
                    <g clip-path="url(#clip1_541_4954)">
                        <g clip-path="url(#clip2_541_4954)">
                            <path d="M21.6001 16L12.6858 21.1429V10.8572L21.6001 16Z" fill="black" />
                        </g>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_541_4954"
                        x="-17.1429"
                        y="-17.1429"
                        width="66.2857"
                        height="66.2857"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.57143" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_541_4954" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_541_4954"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_541_4954">
                        <rect width="9.14286" height="10.2857" fill="white" transform="translate(12.5715 10.8572)" />
                    </clipPath>
                    <clipPath id="clip1_541_4954">
                        <rect width="9.14286" height="10.2857" fill="white" transform="translate(12.5715 10.8572)" />
                    </clipPath>
                    <clipPath id="clip2_541_4954">
                        <rect width="8.91429" height="10.2857" fill="white" transform="translate(12.6858 10.8572)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

//재생버튼
export const StartLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7401)">
                    <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_4_7401)">
                        <path d="M59 50L39 62V38L59 50Z" fill="black" />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7401"
                        x="-30"
                        y="-30"
                        width="158"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7401" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7401" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7401">
                        <rect width="32" height="26" fill="white" transform="translate(33 37)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const StartMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7364)">
                    <rect width="56" height="56" rx="28" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <g clip-path="url(#clip0_4_7364)">
                    <g clip-path="url(#clip1_4_7364)">
                        <g clip-path="url(#clip2_4_7364)">
                            <path d="M37.8 28L22.2 37V19L37.8 28Z" fill="black" />
                        </g>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7364"
                        x="-30"
                        y="-30"
                        width="116"
                        height="116"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7364" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7364" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7364">
                        <rect width="16" height="18" fill="white" transform="translate(22 19)" />
                    </clipPath>
                    <clipPath id="clip1_4_7364">
                        <rect width="16" height="18" fill="white" transform="translate(22 19)" />
                    </clipPath>
                    <clipPath id="clip2_4_7364">
                        <rect width="15.6" height="18" fill="white" transform="translate(22.2 19)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const StartS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_541_4954)">
                    <rect width="32" height="32" rx="16" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <g clip-path="url(#clip0_541_4954)">
                    <g clip-path="url(#clip1_541_4954)">
                        <g clip-path="url(#clip2_541_4954)">
                            <path d="M21.6001 16L12.6858 21.1429V10.8572L21.6001 16Z" fill="black" />
                        </g>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_541_4954"
                        x="-17.1429"
                        y="-17.1429"
                        width="66.2857"
                        height="66.2857"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.57143" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_541_4954" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_541_4954"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_541_4954">
                        <rect width="9.14286" height="10.2857" fill="white" transform="translate(12.5715 10.8572)" />
                    </clipPath>
                    <clipPath id="clip1_541_4954">
                        <rect width="9.14286" height="10.2857" fill="white" transform="translate(12.5715 10.8572)" />
                    </clipPath>
                    <clipPath id="clip2_541_4954">
                        <rect width="8.91429" height="10.2857" fill="white" transform="translate(12.6858 10.8572)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const StopLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7395)">
                    <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_4_7395)">
                        <path d="M43 39V61" stroke="black" stroke-width="4" />
                        <path d="M55 39V61" stroke="black" stroke-width="4" />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7395"
                        x="-30"
                        y="-30"
                        width="158"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7395" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7395" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7395">
                        <rect width="32" height="26" fill="white" transform="translate(33 37)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const StopMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7377)">
                    <rect width="56" height="56" rx="28" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <path d="M22 19V37" stroke="black" stroke-width="4" />
                <path d="M34 19V37" stroke="black" stroke-width="4" />
                <defs>
                    <filter
                        id="filter0_b_4_7377"
                        x="-30"
                        y="-30"
                        width="116"
                        height="116"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7377" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7377" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
export const StopS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_541_4965)">
                    <rect width="32" height="32" rx="16" fill="#DBDBDB" fill-opacity="0.25" />
                </g>
                <path d="M12.5715 10.8572V21.1429" stroke="black" stroke-width="2.28571" />
                <path d="M19.4285 10.8572V21.1429" stroke="black" stroke-width="2.28571" />
                <defs>
                    <filter
                        id="filter0_b_541_4965"
                        x="-17.1429"
                        y="-17.1429"
                        width="66.2857"
                        height="66.2857"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.57143" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_541_4965" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_541_4965"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

//스피커 버튼
export const SpeakerOffLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                borderRadius: '50%',
                overflow: 'hidden',
                cursor: 'pointer',
            }}
        >
            <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7385)">
                    <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_4_7385)">
                        <path
                            d="M39.4719 44.9247H34.7978C33.809 44.9247 33 45.726 33 46.7055V53.1164C33 54.0959 33.809 54.8973 34.7978 54.8973H39.382L48.4607 63V60.2397V39.5822V37L46.4831 38.6918L39.4719 44.9247Z"
                            fill="black"
                        />
                        <path
                            d="M64.999 45.548L63.1113 43.5891L58.6169 48.0412L54.1225 43.5891L52.145 45.548L56.6394 50.0001L52.2349 54.3631L54.0327 56.322L58.527 51.8699L63.0214 56.322L64.8192 54.3631L60.5046 50.0001L64.999 45.548Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7385"
                        x="-30"
                        y="-30"
                        width="158"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7385" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7385" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7385">
                        <rect width="32" height="26" fill="white" transform="translate(33 37)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const SpeakerOnLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_2050_4957)">
                    <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_2050_4957)">
                        <path
                            d="M38.3499 44.3H33.1499C32.0499 44.3 31.1499 45.2 31.1499 46.3V53.5C31.1499 54.6 32.0499 55.5 33.1499 55.5H38.2499L48.3499 64.6V61.5V38.3V35.4L46.1499 37.3L38.3499 44.3Z"
                            fill="black"
                        />
                        <path
                            d="M62.65 38.9L62.15 38.3L59.75 40.3L60.15 40.9C62.15 43.5 63.15 46.6 63.15 49.9C63.15 53.2 62.05 56.4 60.15 59L59.75 59.6L62.05 61.6L62.55 61C64.95 57.9 66.25 54 66.25 50C66.35 45.9 65.05 42.1 62.65 38.9Z"
                            fill="black"
                        />
                        <path
                            d="M56.3498 42.3L54.0498 44.3L54.5498 44.9C55.7498 46.4 56.3498 48.2 56.3498 50C56.3498 51.9 55.6498 53.7 54.5498 55.1L54.0498 55.7L56.3498 57.7L56.8498 57.1C58.4498 55.1 59.4498 52.6 59.4498 50C59.4498 47.4 58.5498 44.9 56.8498 42.9L56.3498 42.3Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_2050_4957"
                        x="-30"
                        y="-30"
                        width="158"
                        height="160"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2050_4957" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_2050_4957"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_2050_4957">
                        <rect width="35.7" height="29.2" fill="white" transform="translate(31.1499 35.4)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export const SpeakerToggle = () => {
    const [isSpeakerOffLg, setIsSpeakerOffLg] = useState(false);
    const handleClick = () => {
        setIsSpeakerOffLg((prev) => !prev);
    };
    return (
        <div
            style={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                backdropFilter: "blur(15px)",
                borderRadius: "50%",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={handleClick}
        >
            {isSpeakerOffLg ? (
                <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_4_7385)">
                        <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                        <g clip-path="url(#clip0_4_7385)">
                            <path
                                d="M39.4719 44.9247H34.7978C33.809 44.9247 33 45.726 33 46.7055V53.1164C33 54.0959 33.809 54.8973 34.7978 54.8973H39.382L48.4607 63V60.2397V39.5822V37L46.4831 38.6918L39.4719 44.9247Z"
                                fill="black"
                            />
                            <path
                                d="M64.999 45.548L63.1113 43.5891L58.6169 48.0412L54.1225 43.5891L52.145 45.548L56.6394 50.0001L52.2349 54.3631L54.0327 56.322L58.527 51.8699L63.0214 56.322L64.8192 54.3631L60.5046 50.0001L64.999 45.548Z"
                                fill="black"
                            />
                        </g>
                    </g>
                    <defs>
                        <filter
                            id="filter0_b_4_7385"
                            x="-30"
                            y="-30"
                            width="158"
                            height="160"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7385" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_4_7385"
                                result="shape"
                            />
                        </filter>
                        <clipPath id="clip0_4_7385">
                            <rect width="32" height="26" fill="white" transform="translate(33 37)" />
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_2050_4957)">
                        <rect width="98" height="100" rx="49" fill="#DBDBDB" fill-opacity="0.25098" />
                        <g clip-path="url(#clip0_2050_4957)">
                            <path
                                d="M38.3499 44.3H33.1499C32.0499 44.3 31.1499 45.2 31.1499 46.3V53.5C31.1499 54.6 32.0499 55.5 33.1499 55.5H38.2499L48.3499 64.6V61.5V38.3V35.4L46.1499 37.3L38.3499 44.3Z"
                                fill="black"
                            />
                            <path
                                d="M62.65 38.9L62.15 38.3L59.75 40.3L60.15 40.9C62.15 43.5 63.15 46.6 63.15 49.9C63.15 53.2 62.05 56.4 60.15 59L59.75 59.6L62.05 61.6L62.55 61C64.95 57.9 66.25 54 66.25 50C66.35 45.9 65.05 42.1 62.65 38.9Z"
                                fill="black"
                            />
                            <path
                                d="M56.3498 42.3L54.0498 44.3L54.5498 44.9C55.7498 46.4 56.3498 48.2 56.3498 50C56.3498 51.9 55.6498 53.7 54.5498 55.1L54.0498 55.7L56.3498 57.7L56.8498 57.1C58.4498 55.1 59.4498 52.6 59.4498 50C59.4498 47.4 58.5498 44.9 56.8498 42.9L56.3498 42.3Z"
                                fill="black"
                            />
                        </g>
                    </g>
                    <defs>
                        <filter
                            id="filter0_b_2050_4957"
                            x="-30"
                            y="-30"
                            width="158"
                            height="160"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2050_4957" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_2050_4957"
                                result="shape"
                            />
                        </filter>
                        <clipPath id="clip0_2050_4957">
                            <rect width="35.7" height="29.2" fill="white" transform="translate(31.1499 35.4)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </div>
    );
};
export const SpeakerOffMd = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                backdropFilter: "blur(15px)",
                cursor: "pointer",
                borderRadius: "50%",
            }}
        >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7372)">
                    <rect width="56" height="56" rx="28" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_4_7372)">
                        <path
                            d="M20.5562 24.0416H16.9045C16.132 24.0416 15.5 24.6666 15.5 25.4305V30.4305C15.5 31.1944 16.132 31.8194 16.9045 31.8194H20.486L27.5787 38.1389V35.9861V19.875V17.8611L26.0337 19.1805L20.5562 24.0416Z"
                            fill="black"
                        />
                        <path
                            d="M40.4999 24.5278L39.0252 23L35.5139 26.4722L32.0027 23L30.4578 24.5278L33.969 28L30.528 31.4028L31.9325 32.9306L35.4437 29.4583L38.955 32.9306L40.3595 31.4028L36.9887 28L40.4999 24.5278Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_4_7372"
                        x="-30"
                        y="-30"
                        width="116"
                        height="116"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7372" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7372" result="shape" />
                    </filter>
                    <clipPath id="clip0_4_7372">
                        <rect width="25" height="20.2778" fill="white" transform="translate(15.5 17.8611)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const SpeakerOnMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_2050_5010)">
                    <rect width="56" height="56" rx="28" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_2050_5010)">
                        <path
                            d="M20.542 24.0084H16.9006C16.1303 24.0084 15.5 24.6386 15.5 25.4089V30.4509C15.5 31.2213 16.1303 31.8515 16.9006 31.8515H20.472L27.5448 38.2241V36.0532V19.8067V17.7759L26.0042 19.1064L20.542 24.0084Z"
                            fill="black"
                        />
                        <path
                            d="M37.5589 20.2269L37.2087 19.8068L35.5281 21.2073L35.8082 21.6275C37.2087 23.4482 37.909 25.6191 37.909 27.93C37.909 30.2409 37.1387 32.4818 35.8082 34.3026L35.5281 34.7227L37.1387 36.1233L37.4889 35.7031C39.1695 33.5323 40.0799 30.8012 40.0799 28C40.1499 25.1289 39.2396 22.4678 37.5589 20.2269Z"
                            fill="black"
                        />
                        <path
                            d="M33.1468 22.6079L31.5361 24.0085L31.8863 24.4286C32.7266 25.4791 33.1468 26.7396 33.1468 28.0001C33.1468 29.3306 32.6566 30.5911 31.8863 31.5715L31.5361 31.9917L33.1468 33.3922L33.4969 32.9721C34.6174 31.5715 35.3176 29.8208 35.3176 28.0001C35.3176 26.1793 34.6874 24.4286 33.4969 23.0281L33.1468 22.6079Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_2050_5010"
                        x="-30"
                        y="-30"
                        width="116"
                        height="116"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2050_5010" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_2050_5010"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_2050_5010">
                        <rect width="25" height="20.4482" fill="white" transform="translate(15.5 17.7759)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const SpeakerOffS = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                backdropFilter: "blur(15px)",
                cursor: "pointer",
                borderRadius: "50%",
                overflow: "hidden",
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_541_4960)">
                    <rect width="32" height="32" rx="16" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_541_4960)">
                        <path
                            d="M11.7464 13.738H9.65975C9.21833 13.738 8.85718 14.0952 8.85718 14.5317V17.3888C8.85718 17.8253 9.21833 18.1825 9.65975 18.1825H11.7063L15.7593 21.7936V20.5634V11.3571V10.2063L14.8764 10.9603L11.7464 13.738Z"
                            fill="black"
                        />
                        <path
                            d="M23.1429 14.0158L22.3002 13.1428L20.2938 15.1269L18.2874 13.1428L17.4045 14.0158L19.411 16L17.4447 17.9444L18.2472 18.8174L20.2537 16.8333L22.2601 18.8174L23.0626 17.9444L21.1365 16L23.1429 14.0158Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_541_4960"
                        x="-17.1429"
                        y="-17.1429"
                        width="66.2857"
                        height="66.2857"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.57143" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_541_4960" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_541_4960"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_541_4960">
                        <rect width="14.2857" height="11.5873" fill="white" transform="translate(8.85718 10.2063)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
export const SpeakerOnS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_2050_5038)">
                    <rect width="32" height="32" rx="16" fill="#DBDBDB" fill-opacity="0.25098" />
                    <g clip-path="url(#clip0_2050_5038)">
                        <path
                            d="M11.737 13.7184H9.65554C9.21523 13.7184 8.85498 14.0786 8.85498 14.5189V17.401C8.85498 17.8413 9.21523 18.2015 9.65554 18.2015H11.697L15.7398 21.8441V20.6032V11.3167V10.1559L14.8592 10.9164L11.737 13.7184Z"
                            fill="black"
                        />
                        <path
                            d="M21.4638 11.5569L21.2637 11.3168L20.303 12.1173L20.4631 12.3575C21.2637 13.3982 21.6639 14.6391 21.6639 15.96C21.6639 17.2809 21.2236 18.5618 20.4631 19.6026L20.303 19.8427L21.2236 20.6433L21.4238 20.4031C22.3844 19.1623 22.9048 17.6012 22.9048 16C22.9448 14.3589 22.4245 12.8378 21.4638 11.5569Z"
                            fill="black"
                        />
                        <path
                            d="M18.9419 12.9178L18.0212 13.7184L18.2214 13.9586C18.7017 14.559 18.9419 15.2795 18.9419 16C18.9419 16.7605 18.6617 17.481 18.2214 18.0414L18.0212 18.2816L18.9419 19.0822L19.142 18.842C19.7825 18.0414 20.1828 17.0407 20.1828 16C20.1828 14.9593 19.8225 13.9586 19.142 13.158L18.9419 12.9178Z"
                            fill="black"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_b_2050_5038"
                        x="-17.1429"
                        y="-17.1429"
                        width="66.2857"
                        height="66.2857"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.57143" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2050_5038" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_2050_5038"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_2050_5038">
                        <rect width="14.29" height="11.6882" fill="white" transform="translate(8.85498 10.1559)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

//하트 버튼
export const HeartToggle = () => {
    const [isHeartOn, setIsHeartOn] = useState(false);

    const handleHeartClick = () => {
        setIsHeartOn(!isHeartOn);
    };

    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
            onClick={handleHeartClick}
        >
            {isHeartOn ? (
                // Filled heart (on)
                <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="53" height="54" rx="6" fill="#DBDBDB" fillOpacity="0.25" />
                    <path
                        d="M27.7757 18.2801L26.5791 19.4692L25.3787 18.279C22.3182 15.2444 17.356 15.2444 14.2954 18.279C11.2349 21.3136 11.2349 26.2337 14.2954 29.2683L25.8073 40.6824C26.2344 41.1059 26.9268 41.1059 27.3539 40.6824L38.8746 29.2661C41.9284 26.2215 41.9336 21.3152 38.8726 18.2801C35.8064 15.24 30.8419 15.24 27.7757 18.2801Z"
                        fill="#F59C04"
                        fillRule="evenodd"
                    />
                </svg>
            ) : (
                // Unfilled heart (off)
                <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="53" height="54" rx="6" fill="#DBDBDB" fillOpacity="0.25" />
                    <path
                        d="M27.7757 18.2801L26.5791 19.4692L25.3787 18.279C22.3182 15.2444 17.356 15.2444 14.2954 18.279C11.2349 21.3136 11.2349 26.2337 14.2954 29.2683L25.8073 40.6824C26.2344 41.1059 26.9268 41.1059 27.3539 40.6824L38.8746 29.2661C41.9284 26.2215 41.9336 21.3152 38.8726 18.2801C35.8064 15.24 30.8419 15.24 27.7757 18.2801Z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
            )}
        </div>
    );
};
// export const HeartOffLg = () => {
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 width: "fit-content",
//                 height: "fit-content",
//                 backdropFilter: "blur(15px)",
//             }}
//         >
//             <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="53" height="54" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
//                 <path
//                     d="M27.7757 18.2801L26.5791 19.4692L25.3787 18.279C22.3182 15.2444 17.356 15.2444 14.2954 18.279C11.2349 21.3136 11.2349 26.2337 14.2954 29.2683L25.8073 40.6824C26.2344 41.1059 26.9268 41.1059 27.3539 40.6824L38.8746 29.2661C41.9284 26.2215 41.9336 21.3152 38.8726 18.2801C35.8064 15.24 30.8419 15.24 27.7757 18.2801ZM37.3238 27.737L26.5805 38.3825L15.8419 27.7349C13.6355 25.5471 13.6355 22.0001 15.8419 19.8124C18.0484 17.6247 21.6258 17.6247 23.8322 19.8124L25.8114 21.7748C26.2458 22.2055 26.9525 22.1971 27.3762 21.7563L29.3223 19.8135C31.5343 17.6202 35.114 17.6202 37.326 19.8135C39.5331 22.0017 39.5293 25.5383 37.3238 27.737Z"
//                     fill="black"
//                 />
//             </svg>
//         </div>
//     );
// };
// export const HeartOnLg = () => {
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 width: "fit-content",
//                 height: "fit-content",
//                 backdropFilter: "blur(15px)",
//             }}
//         >
//             <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="53" height="54" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
//                 <path
//                     d="M27.7757 18.2801L26.5791 19.4692L25.3787 18.279C22.3182 15.2444 17.356 15.2444 14.2954 18.279C11.2349 21.3136 11.2349 26.2337 14.2954 29.2683L25.8073 40.6824C26.2344 41.1059 26.9268 41.1059 27.3539 40.6824L38.8746 29.2661C41.9284 26.2215 41.9336 21.3152 38.8726 18.2801C35.8064 15.24 30.8419 15.24 27.7757 18.2801ZM37.3238 27.737L26.5805 38.3825L15.8419 27.7349C13.6355 25.5471 13.6355 22.0001 15.8419 19.8124C18.0484 17.6247 21.6258 17.6247 23.8322 19.8124L25.8114 21.7748C26.2458 22.2055 26.9525 22.1971 27.3762 21.7563L29.3223 19.8135C31.5343 17.6202 35.114 17.6202 37.326 19.8135C39.5331 22.0017 39.5293 25.5383 37.3238 27.737Z"
//                     fill="#F59C04"
//                 />
//                 <path
//                     d="M27.7757 18.2801L26.5791 19.4692L25.3787 18.279C22.3182 15.2444 17.356 15.2444 14.2954 18.279C11.2349 21.3136 11.2349 26.2337 14.2954 29.2683L25.8073 40.6824C26.2344 41.1059 26.9268 41.1059 27.3539 40.6824L38.8746 29.2661C41.9284 26.2215 41.9336 21.3152 38.8726 18.2801C35.8064 15.24 30.8419 15.24 27.7757 18.2801ZM37.3238 27.737L26.5805 38.3825L15.8419 27.7349C13.6355 25.5471 17 29.737 21.5 33.5C23 35.5 24.7935 36.8123 27 39L29.3223 37C29.7566 37.4306 34.5763 31.4408 35 31L38 28C40.212 25.8067 40.0486 28.9214 38.8746 21C37.5486 16.6865 39.5293 25.5383 37.3238 27.737Z"
//                     fill="#F59C04"
//                 />
//             </svg>
//         </div>
//     );
// };
export const HeartOnS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31.4074" height="32" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                <path
                    d="M16.4597 10.8326L15.7505 11.5373L15.0392 10.832C13.2256 9.0337 10.285 9.0337 8.47134 10.832C6.65767 12.6302 6.65767 15.5458 8.47134 17.3441L15.2932 24.1081C15.5463 24.359 15.9566 24.359 16.2097 24.1081L23.0368 17.3429C24.8464 15.5386 24.8495 12.6312 23.0356 10.8326C21.2186 9.03106 18.2766 9.03106 16.4597 10.8326ZM22.1178 16.4367L15.7514 22.7451L9.38779 16.4354C8.08025 15.139 8.08025 13.0371 9.38779 11.7406C10.6953 10.4442 12.8152 10.4442 14.1228 11.7406L15.2956 12.9036C15.553 13.1588 15.9718 13.1538 16.2229 12.8926L17.3761 11.7413C18.687 10.4416 20.8083 10.4416 22.1191 11.7413C23.427 13.038 23.4247 15.1338 22.1178 16.4367Z"
                    fill="#F59C04"
                />
                <path
                    d="M16.4597 10.8326L15.7505 11.5373L15.0392 10.832C13.2256 9.0337 10.285 9.0337 8.47134 10.832C6.65767 12.6302 6.65767 15.5458 8.47134 17.3441L15.2932 24.1081C15.5463 24.359 15.9566 24.359 16.2097 24.1081L23.0368 17.3429C24.8464 15.5386 24.8495 12.6312 23.0356 10.8326C21.2186 9.03106 18.2766 9.03106 16.4597 10.8326ZM22.1178 16.4367L15.7514 22.7451L9.38779 16.4354C8.08025 15.139 10.074 17.6219 12.7407 19.8518C13.6296 21.037 14.6924 21.8146 16 23.1111L17.3761 21.9259C17.6335 22.1811 20.4896 18.6316 20.7407 18.3703L22.5185 16.5926C23.8293 15.2929 23.7325 17.1386 23.0368 12.4444C22.251 9.88828 23.4247 15.1338 22.1178 16.4367Z"
                    fill="#F59C04"
                />
            </svg>
        </div>
    );
};
export const HeartOffS = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31.4074" height="32" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                <path
                    d="M16.4597 10.8326L15.7505 11.5373L15.0392 10.832C13.2256 9.0337 10.285 9.0337 8.47134 10.832C6.65767 12.6302 6.65767 15.5458 8.47134 17.3441L15.2932 24.1081C15.5463 24.359 15.9566 24.359 16.2097 24.1081L23.0368 17.3429C24.8464 15.5386 24.8495 12.6312 23.0356 10.8326C21.2186 9.03106 18.2766 9.03106 16.4597 10.8326ZM22.1178 16.4367L15.7514 22.7451L9.38779 16.4354C8.08025 15.139 8.08025 13.0371 9.38779 11.7406C10.6953 10.4442 12.8152 10.4442 14.1228 11.7406L15.2956 12.9036C15.553 13.1588 15.9718 13.1538 16.2229 12.8926L17.3761 11.7413C18.687 10.4416 20.8083 10.4416 22.1191 11.7413C23.427 13.038 23.4247 15.1338 22.1178 16.4367Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};

//사각형 재생버튼
export const PlySquareLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                borderRadius: '50px',
                cursor: 'pointer',
            }}
        >
            <svg width="142" height="54" viewBox="0 0 142 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4_7407)">
                    <rect width="142" height="54" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                </g>
                <path
                    d="M74.268 19.1V20.92C74.268 25.184 75.958 28.954 79.26 30.67L78.012 32.308C75.724 31.034 74.112 28.772 73.28 26.016C72.5 29.188 70.862 31.71 68.444 33.114L67.144 31.502C70.472 29.63 72.214 25.652 72.214 20.92V19.1H67.69V17.358H78.506V19.1H74.268ZM85.214 14.576H87.268V37.924H85.214V25.782H82.146V36.78H80.144V15.122H82.146V24.014H85.214V14.576ZM105.96 22.61V28.252H103.932V15.07H105.96V20.868H108.924V14.628H110.978V29.006H108.924V22.61H105.96ZM102.97 25.548L101.826 27.186C99.642 26.302 98.056 24.638 97.224 22.662C96.392 24.846 94.728 26.822 92.466 27.836L91.322 26.172C94.364 24.82 96.184 21.804 96.184 19.204V16.058H98.238V19.204C98.238 21.778 99.98 24.404 102.97 25.548ZM103.282 36.26C106.818 36.26 108.976 35.324 108.976 33.712C108.976 32.1 106.818 31.19 103.282 31.19C99.798 31.19 97.614 32.1 97.614 33.712C97.614 35.324 99.798 36.26 103.282 36.26ZM103.282 29.526C108.092 29.526 111.082 31.06 111.082 33.712C111.082 36.364 108.092 37.898 103.282 37.898C98.498 37.898 95.508 36.364 95.508 33.712C95.508 31.06 98.498 29.526 103.282 29.526Z"
                    fill="black"
                />
                <path d="M51 27L26 42V12L51 27Z" fill="black" />
                <defs>
                    <filter
                        id="filter0_b_4_7407"
                        x="-4"
                        y="-4"
                        width="150"
                        height="62"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_7407" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_7407" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
export const PlySquareMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
        >
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_495_8563)">
                    <rect y="0.561523" width="79.7193" height="30.3158" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                </g>
                <path
                    d="M47.209 22.0283H46.2441V16.1631H44.708V21.457H43.7559V10.9834H44.708V15.3125H46.2441V10.7422H47.209V22.0283ZM40.8486 13.8271C40.8486 14.5212 40.9417 15.1771 41.1279 15.7949C41.3184 16.4085 41.5977 16.9523 41.9658 17.4263C42.334 17.896 42.7826 18.2663 43.3115 18.5371L42.7148 19.3115C42.152 19.0068 41.6738 18.5879 41.2803 18.0547C40.891 17.5173 40.5947 16.8952 40.3916 16.1885C40.1969 16.9883 39.8986 17.6865 39.4966 18.2832C39.0988 18.8799 38.6058 19.3496 38.0176 19.6924L37.3955 18.9307C37.9287 18.6387 38.3815 18.2388 38.7539 17.731C39.1263 17.2231 39.4077 16.637 39.5981 15.9727C39.7886 15.3083 39.8838 14.5931 39.8838 13.8271V12.9258H37.6621V12.0879H42.9434V12.9258H40.8486V13.8271ZM52.1094 12.9893C52.1094 13.404 52.2025 13.8123 52.3887 14.2144C52.5791 14.6164 52.8499 14.9782 53.2012 15.2998C53.5524 15.6214 53.9629 15.8711 54.4326 16.0488L53.9121 16.8105C53.3789 16.6032 52.9176 16.3091 52.5283 15.9282C52.1432 15.5474 51.847 15.1094 51.6396 14.6143C51.4238 15.1729 51.1149 15.6743 50.7129 16.1187C50.3109 16.5588 49.8411 16.8952 49.3037 17.1279L48.7578 16.3535C49.2402 16.1419 49.6613 15.8542 50.021 15.4902C50.3849 15.1221 50.6642 14.7201 50.8589 14.2842C51.0578 13.8441 51.1572 13.4124 51.1572 12.9893V11.4531H52.1094V12.9893ZM58.3301 17.7246H57.3779V14.6143H55.8799V17.3691H54.9404V10.9707H55.8799V13.7891H57.3779V10.7549H58.3301V17.7246ZM54.5977 17.9785C55.3763 17.9785 56.0492 18.0589 56.6162 18.2197C57.1875 18.3763 57.6255 18.6069 57.9302 18.9116C58.2391 19.2121 58.3936 19.5739 58.3936 19.9971C58.3936 20.416 58.2391 20.7757 57.9302 21.0762C57.6255 21.3766 57.1875 21.6051 56.6162 21.7617C56.0492 21.9225 55.3763 22.0029 54.5977 22.0029C53.819 22.0029 53.144 21.9225 52.5728 21.7617C52.0015 21.6051 51.5635 21.3766 51.2588 21.0762C50.9583 20.7757 50.8102 20.416 50.8145 19.9971C50.8102 19.5739 50.9583 19.2121 51.2588 18.9116C51.5635 18.6069 51.9993 18.3763 52.5664 18.2197C53.1377 18.0589 53.8148 17.9785 54.5977 17.9785ZM54.5977 18.7402C54.0264 18.7402 53.5291 18.791 53.106 18.8926C52.6828 18.9899 52.359 19.1338 52.1348 19.3242C51.9105 19.5146 51.8005 19.7389 51.8047 19.9971C51.8005 20.251 51.9105 20.471 52.1348 20.6572C52.359 20.8434 52.6807 20.9852 53.0996 21.0825C53.5228 21.1799 54.0221 21.2285 54.5977 21.2285C55.1689 21.2285 55.6641 21.1799 56.083 21.0825C56.502 20.9852 56.8257 20.8434 57.0542 20.6572C57.2827 20.471 57.3991 20.251 57.4033 19.9971C57.3991 19.7389 57.2827 19.5146 57.0542 19.3242C56.8257 19.1338 56.4998 18.9899 56.0767 18.8926C55.6577 18.791 55.1647 18.7402 54.5977 18.7402Z"
                    fill="black"
                />
                <path d="M28.6316 15.7194L14.5965 24.1404L14.5965 7.29834L28.6316 15.7194Z" fill="black" />
                <defs>
                    <filter
                        id="filter0_b_495_8563"
                        x="-4"
                        y="-3.43848"
                        width="87.7192"
                        height="38.3157"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_495_8563" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_495_8563"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

// 사각형 멈춤 버튼
export const StopSquareMd = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
        >
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_495_8553)">
                    <rect y="0.561523" width="79.7193" height="30.3158" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                </g>
                <path
                    d="M46.8662 17.0073H45.8633V14.1382H43.2227V16.3091H38.043V11.3198H43.2227V13.313H45.8633V10.52H46.8662V17.0073ZM39.0332 15.5093H42.2451V12.1323H39.0332V15.5093ZM46.8662 21.6538H39.4902V17.5913H46.8662V21.6538ZM40.4805 20.8413H45.8887V18.4038H40.4805V20.8413ZM59.0283 16.9185H54.3691V18.1626H57.7715V21.6538H50.002V18.1626H53.3916V16.9185H48.7451V16.106H59.0283V16.9185ZM54.3691 11.5864H57.9873V12.3862H54.4326C54.4538 12.7925 54.6442 13.1585 55.0039 13.4844C55.3678 13.806 55.8481 14.0705 56.4448 14.2778C57.0415 14.481 57.6995 14.6164 58.4189 14.6841L58.127 15.4331C57.141 15.3315 56.2692 15.1136 55.5117 14.7793C54.7585 14.445 54.2168 14.007 53.8867 13.4653C53.5524 14.007 53.0065 14.445 52.249 14.7793C51.4958 15.1136 50.6283 15.3315 49.6465 15.4331L49.3418 14.6841C50.0654 14.6164 50.7256 14.481 51.3223 14.2778C51.9189 14.0705 52.3971 13.806 52.7568 13.4844C53.1208 13.1585 53.3154 12.7925 53.3408 12.3862H49.8115V11.5864H53.3916V10.4565H54.3691V11.5864ZM50.9922 20.8413H56.7939V18.9624H50.9922V20.8413Z"
                    fill="black"
                />
                <path d="M17.4036 8.98242V22.4561" stroke="black" stroke-width="2" />
                <path d="M24.1404 8.98242V22.4561" stroke="black" stroke-width="2" />
                <defs>
                    <filter
                        id="filter0_b_495_8553"
                        x="-4"
                        y="-3.43848"
                        width="87.7192"
                        height="38.3157"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_495_8553" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_495_8553"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
export const StopSquareLg = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                backdropFilter: 'blur(15px)',
                cursor: 'pointer',
            }}
        >
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_495_8553)">
                    <rect y="0.561523" width="79.7193" height="30.3158" rx="6" fill="#DBDBDB" fill-opacity="0.25098" />
                </g>
                <path
                    d="M46.8662 17.0073H45.8633V14.1382H43.2227V16.3091H38.043V11.3198H43.2227V13.313H45.8633V10.52H46.8662V17.0073ZM39.0332 15.5093H42.2451V12.1323H39.0332V15.5093ZM46.8662 21.6538H39.4902V17.5913H46.8662V21.6538ZM40.4805 20.8413H45.8887V18.4038H40.4805V20.8413ZM59.0283 16.9185H54.3691V18.1626H57.7715V21.6538H50.002V18.1626H53.3916V16.9185H48.7451V16.106H59.0283V16.9185ZM54.3691 11.5864H57.9873V12.3862H54.4326C54.4538 12.7925 54.6442 13.1585 55.0039 13.4844C55.3678 13.806 55.8481 14.0705 56.4448 14.2778C57.0415 14.481 57.6995 14.6164 58.4189 14.6841L58.127 15.4331C57.141 15.3315 56.2692 15.1136 55.5117 14.7793C54.7585 14.445 54.2168 14.007 53.8867 13.4653C53.5524 14.007 53.0065 14.445 52.249 14.7793C51.4958 15.1136 50.6283 15.3315 49.6465 15.4331L49.3418 14.6841C50.0654 14.6164 50.7256 14.481 51.3223 14.2778C51.9189 14.0705 52.3971 13.806 52.7568 13.4844C53.1208 13.1585 53.3154 12.7925 53.3408 12.3862H49.8115V11.5864H53.3916V10.4565H54.3691V11.5864ZM50.9922 20.8413H56.7939V18.9624H50.9922V20.8413Z"
                    fill="black"
                />
                <path d="M17.4036 8.98242V22.4561" stroke="black" stroke-width="2" />
                <path d="M24.1404 8.98242V22.4561" stroke="black" stroke-width="2" />
                <defs>
                    <filter
                        id="filter0_b_495_8553"
                        x="-4"
                        y="-3.43848"
                        width="87.7192"
                        height="38.3157"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_495_8553" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_495_8553"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export const SquareYellowPreveBtn = () => {
    return (
        <div style={{ cursor: 'pointer' }}>
            <input
                type="button"
                style={{
                    width: 'fit-content',
                    height: 'fit-contnet',
                    all: 'unset',
                    position: 'absolute',

                    cursor: 'pointer',
                }}
            />
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bdi_2068_830)">
                    <rect
                        width="65"
                        height="65"
                        rx="16.25"
                        transform="matrix(-1.19249e-08 1 1 1.19249e-08 13.5 13.5)"
                        fill="url(#paint0_linear_2068_830)"
                        shape-rendering="geometricPrecision"
                        stroke-width="1" // stroke-width를 더 크게
                    />

                    <rect
                        x="0.40625"
                        y="0.40625"
                        width="64.1875"
                        height="64.1875"
                        rx="15.8438"
                        transform="matrix(-1.19249e-08 1 1 1.19249e-08 13.5 13.5)"
                        stroke="url(#paint1_linear_2068_830)"
                        stroke-opacity="0.7"
                        stroke-width="0.8125"
                        shape-rendering="crispEdges"
                    />
                </g>
                <g filter="url(#filter1_d_2068_830)">
                    <path
                        d="M42.75 36.25L35.2981 43.7019C34.0289 44.9711 34.0289 47.0289 35.2981 48.2981L42.75 55.75"
                        stroke="#F59C04"
                        stroke-width="4.875"
                        stroke-linecap="round"
                    />
                    <path d="M36.25 46L59 46" stroke="#F59C04" stroke-width="4.875" stroke-linecap="round" />
                </g>
                <defs>
                    <filter
                        id="filter0_bdi_2068_830"
                        x="0.5"
                        y="0.5"
                        width="91"
                        height="91"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.25" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2068_830" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.694118 0 0 0 0 0.231373 0 0 0 0.1 0" />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_2068_830"
                            result="effect2_dropShadow_2068_830"
                        />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2068_830" result="shape" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.875" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.769412 0 0 0 0 0.231373 0 0 0 0.38 0"
                        />
                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2068_830" />
                    </filter>
                    <filter
                        id="filter1_d_2068_830"
                        x="25.4102"
                        y="27.3125"
                        width="42.5273"
                        height="37.375"
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
                        <feGaussianBlur stdDeviation="3.25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2068_830" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2068_830" result="shape" />
                    </filter>
                    <linearGradient
                        id="paint0_linear_2068_830"
                        x1="-21.125"
                        y1="-26"
                        x2="99.125"
                        y2="81.25"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#A67E34" stop-opacity="0.26" />
                        <stop offset="0.505208" stop-color="#FFC558" stop-opacity="0.12" />
                        <stop offset="1" stop-color="#FFD382" stop-opacity="0.04" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_2068_830"
                        x1="1.625"
                        y1="9.75"
                        x2="58.5"
                        y2="58.5"
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
