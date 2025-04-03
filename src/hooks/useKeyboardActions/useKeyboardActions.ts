"use client";

import { useCallback, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import { SectionStore } from "@store";

export const useKeyboardActions = () => {
    const { sections, currentSection } = SectionStore();
    const router = useRouter();

    const changeSection = useCallback(
        (direction: string) => {
            const currentIndex = sections.findIndex((section) => section.id === currentSection);
            let routePath = "";

            switch (direction) {
                case "prev":
                    routePath = sections[currentIndex === 0 ? sections.length - 1 : currentIndex - 1].id;
                    break;
                case "next":
                    routePath = sections[currentIndex === sections.length - 1 ? 0 : currentIndex + 1].id;
                    break;
            }

            router.push(`/pda/${routePath}`);

        },
        [sections, currentSection, router]
    );

    const actions: Record<string, () => void> = useMemo(
        () => ({
            "prev-section": () => changeSection("prev"),
            "next-section": () => changeSection("next"),
        }),
        [changeSection]
    );

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            const keyMap: Record<string, string> = {
                "KeyQ": "prev-section",
                "KeyE": "next-section",
            };

            const actionName = keyMap[event.code];
            if (actionName && actions[actionName]) {
                event.preventDefault();
                actions[actionName]();
            }
        },
        [actions]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    return { actions };
};