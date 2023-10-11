import { PortionsProvider } from './portions-context'
import { SettingsProvider } from './settings-context'
import { MealsProvider } from './meals-context'
import { CaloriesProvider } from './calories-context'

export default function Providers({ children }: any) {

    return (
      <CaloriesProvider>
        <MealsProvider>
            <SettingsProvider>
                <PortionsProvider>
                    {children}
                </PortionsProvider>
            </SettingsProvider>
        </MealsProvider>
      </CaloriesProvider>
    );
  }