// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Switch
            onChange={toggleTheme}
            checked={theme === 'light'}
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        />
    )
};