'use client'

import React, { createContext, useReducer, useContext } from 'react';
import { SettingsReducer } from './settings-reducer';

export interface SettingsProps {
  halfPortions: boolean;
  autoReset: boolean;
  timeStamp: string;
}

let initialSettings: SettingsProps;
if(localStorage.getItem('settings')) {
  initialSettings = JSON.parse(localStorage.getItem('settings')!)
} else initialSettings = {
  halfPortions: false,
  autoReset: false,
  timeStamp: new Date().toDateString()
}

const SettingsContext = createContext<SettingsProps>(initialSettings);

const SettingsDispatchContext = createContext((() => {}) as React.Dispatch<any>);

export const SettingsProvider = ({ children }: any) => {
  const [settings, dispatch] = useReducer(SettingsReducer, initialSettings);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  return useContext(SettingsContext);
}
  
export const useSettingsDispatch = () => {
  return useContext(SettingsDispatchContext);
}