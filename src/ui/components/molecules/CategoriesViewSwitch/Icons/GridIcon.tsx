"use client";

interface GridIconProps {
    isActive: boolean;
}

export const GridIcon = ({ isActive }: GridIconProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 14.6667V4H14.6667V14.6667H4ZM4 28V17.3333H14.6667V28H4ZM17.3333 14.6667V4H28V14.6667H17.3333ZM17.3333 28V17.3333H28V28H17.3333ZM6.66667 12H12V6.66667H6.66667V12ZM20 12H25.3333V6.66667H20V12ZM20 25.3333H25.3333V20H20V25.3333ZM6.66667 25.3333H12V20H6.66667V25.3333Z"
                fill={isActive ? "#3F3830" : "#AFAC99"}
            />
        </svg>
    )
}

