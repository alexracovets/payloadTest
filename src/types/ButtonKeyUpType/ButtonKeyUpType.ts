"use client";

import { ReactNode } from "react";

export interface ButtonKeyUpType {
    action: string;
    children: ReactNode;
    footer?: boolean;
};