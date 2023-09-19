import { SettingsProps } from "./settings-context";

type ACTIONTYPE = { 
    type: 'setHalfPortions' | 'setAutoReset' | 'setTimeStamp',
    timeStamp: string
}

export const  SettingsReducer = (settings: SettingsProps, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'setHalfPortions': {
            const newSettings = {...settings, halfPortions: !settings.halfPortions};
            saveSettings(newSettings);
            return newSettings;
        }
        case 'setAutoReset': {
            const newSettings = {...settings, autoReset: !settings.autoReset};
            saveSettings(newSettings);
            return newSettings;
        }
        case 'setTimeStamp': {
            const newSettings = {...settings, timeStamp: action.timeStamp};
            saveSettings(newSettings);
            return newSettings;        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const saveSettings = (settings: SettingsProps) => {
    localStorage.setItem('settings', JSON.stringify(settings));
}