'use client'

import React, { createContext, useState } from 'react';

export interface SettingsProps {
    halfPortions: boolean;
    autoReset: boolean;
    timeStamp: number;
}

let initialSettings: SettingsProps;
if(localStorage.getItem('settings')) {
    initialSettings = JSON.parse(localStorage.getItem('settings')!)
} else initialSettings = {
    halfPortions: false,
    autoReset: false,
    timeStamp: new Date().getMinutes()
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