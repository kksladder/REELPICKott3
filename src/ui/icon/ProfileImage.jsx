import React from 'react';

import styled from 'styled-components';

const ProfileImage = () => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_507_4344)">
                <rect width="60" height="60" rx="30" fill="#DAD7D7" />
                <rect x="18" y="10" width="24" height="24" rx="12" fill="#858585" />
                <rect x="-15" y="40" width="90" height="90" rx="45" fill="#858585" />
            </g>
            <defs>
                <clipPath id="clip0_507_4344">
                    <rect width="60" height="60" rx="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ProfileImage;
