'use client'

import React, { createContext, useState } from 'react';

export interface SettingsProps {
    halfPortions: boolean;
    automaticReset: boolean;
}

let initialSettings: SettingsProps;
if(localStorage.getItem('settings')) {
    initialSettings = JSON.parse(localStorage.getItem('settings')!)
} else initialSettings = {
    halfPortions: false,
    automaticReset: false
}

export const SettingsContext = createContext({
    settings: initialSettings
} as SettingsContextProperty);

export interface SettingsContextProperty {
    settings: SettingsProps;
    setSettings: (settings: SettingsProps) => void;
};
export const SettingsProvider = ({ children }: any) => {
    const [settings, setSettings] = useState(initialSettings);

    return (
      <SettingsContext.Provider value={{settings, setSettings}}>
          {children}
      </SettingsContext.Provider>
    );
}