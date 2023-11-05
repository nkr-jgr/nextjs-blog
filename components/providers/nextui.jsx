// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import React from 'react'

export function Providers({ children }) {
    return (
        <NextUIProvider>
            <NextThemeProvider attribute="class" defaultTheme="purple-dark">
            {children}
            </NextThemeProvider>
        </NextUIProvider>
    )
}