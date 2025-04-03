"use client";

export const HomeVideo = () => {
    return (
        <div className="relative w-full h-[100dvh]">
            <video muted autoPlay loop className="w-full h-full object-cover">
                <source src="/video/homeVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
};