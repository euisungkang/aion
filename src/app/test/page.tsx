'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0},
};

export default function Test() {
    const [isVisible, setIsVisible] = useState(true);

    function submitForm(formData : FormData) {
        console.log("true");
       setIsVisible(!isVisible);
    }

    return (
        <main className="flex justify-center items-center h-screen w-screen text-[#ebe8e8] bg-gradient-to-b from-black to-[#121212]">

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="test1"
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        transition={{type: 'linear'}}
                        variants={variants}>

                        <form action={submitForm}>
                            <Input type="text" name="search"/>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/*<BentoGrid className="max-w-4xl mx-auto">*/}
            {/*    {items.map((item, i) => (*/}
            {/*        <BentoGridItem*/}
            {/*            key={i}*/}
            {/*            title={item.title}*/}
            {/*            description={item.description}*/}
            {/*            header={item.header}*/}
            {/*            icon={item.icon}*/}
            {/*            className={i === 3 || i === 6 ? "md:col-span-2" : ""}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</BentoGrid>*/}
        </main>
    );
}
const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
