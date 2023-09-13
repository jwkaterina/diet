'use client'

import React, { FunctionComponent } from 'react';

export const SectionBody: FunctionComponent<SectionBodyProps> = (props) => {
    return (
        <div className="Settings__section-body Settings__general-grid">
            {props.children}
        </div>
    )
}

export interface SectionBodyProps {
    children: React.ReactNode;
}