import {LiFiWidget, WidgetConfig } from '@lifi/widget';
import './App.css';
import './index.css';

  const widgetConfig: WidgetConfig = {
      fee: 0.01,
      fromChain: 137,
      toChain: 137,
        containerStyle: {
          width: 392,
          height: 640,
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
          display: 'flex',
          maxWidth: 392,
          boxShadow: '0 5px 15px 0 rgba(14, 245, 6, 0.425)',
        },
        theme: {
            palette: {
              primary: { main: 'rgba(14, 245, 6, 0.425)' },
              secondary: { main: 'rgba(14, 245, 6, 0.425)' },
            },
            shape: {
              borderRadius: 16,
              borderRadiusSecondary: 16,
              boxShadow: '0 5px 15px 0 rgba(14, 245, 6, 0.425)',
            },
            typography: {
              fontFamily: 'Comic Sans MS',
            },
          },
          appearance: 'dark',
          hiddenUI: ['appearance'],
          variant: 'expandable',
          subvariant: 'split',
      };

      export const WidgetPage = () => {
        return (
          <LiFiWidget integrator="PylonDEX" config={widgetConfig} />
        );
      };
