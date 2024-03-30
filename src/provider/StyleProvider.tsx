import React, { useEffect } from "react"

import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { useLocation } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";


import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import '@/styles/global.css';
import '@mantine/tiptap/styles.css';

const theme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    Button: {
      classNames: {
        label: 'font-normal',
      },
    },
    Modal: {
      styles: {
        title: {
          fontWeight: 'bold',
          fontSize: '20px'
        },
      },
    },
  },
}

type props = {
    children: React.ReactNode
}
export const StyleProvider: React.FC<props> = ({ children }) => {
    const { pathname } = useLocation();
    
    useEffect(() => {
      const root = document.getElementById('root');
      root?.scrollTo(0, 0);
    }, [pathname]);

    return (
      <MantineProvider theme={theme}>
        <ModalsProvider labels={{confirm: 'Konfirmasi', cancel: 'Batal'}}>
        {children}
        </ModalsProvider>
        <Notifications position="top-center" autoClose={2000}/>
      </MantineProvider>
    )
}