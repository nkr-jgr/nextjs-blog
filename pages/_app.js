import '../styles/global.css';
import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function App({ Component, pageProps }) {
    return (
            <NextThemesProvider attribute="class" defaultTheme="dark">
            <div className='purple-dark text-foreground bg-background'>
                <Component {...pageProps} />
            </div>
            </NextThemesProvider>
    )
}