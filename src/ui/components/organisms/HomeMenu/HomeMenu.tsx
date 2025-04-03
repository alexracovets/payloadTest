"use client";

import { HomeLogo, Text } from '@components/atoms';
import { NavigationHome } from '@components/molecules';

export const HomeMenu = () => {
    return (
        <aside className="flex flex-col justify-center items-center w-auto h-full bg-primary-black p-10 text-2 min-w-130">
            <HomeLogo />
            <Text variant='info' asChild="h3" className='mb-12'>Інформація</Text>
            <NavigationHome />
        </aside>
    );
};