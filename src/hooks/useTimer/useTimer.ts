"use client";

import { useState, useEffect } from "react";

export const useTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [currentTime, setCurrentTime] = useState<string>("00:00");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        setIsActive(true);
        return () => clearInterval(intervalId);
    }, []);

    return { currentTime, isActive };
};