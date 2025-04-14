"use client";
 
import { Button } from "@components/atoms";
import { ButtonKeyUpType } from "@types";

export const ButtonKeyUp = ({ action, children, footer }: ButtonKeyUpType) => {
 
    return (
        <Button variant="destructive" asChild={footer}>
            {children}
        </Button>
    );
};
