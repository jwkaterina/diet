'use client'

import React, { createContext, useReducer } from 'react';
import { SettingsReducer } from './settings-reducer';

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
    dispatchSettings: (newValue: any) => void;
};
export const SettingsProvider = ({ children }: any) => {
    const [settings, dispatchSettings] = useReducer(SettingsReducer, initialSettings);

    return (
      <SettingsContext.Provider value={{settings, dispatchSettings}}>
          {children}
      </SettingsContext.Provider>
    );
}