'use client';

import { useState } from 'react';
import HomePage from '@/components/HomePage';
import SearchPage from '@/components/SearchPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {isVisible ? (
                <motion.div
                    key="ok"
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{type: 'linear'}}
                    variants={{
                        hidden: {opacity: 0},
                        enter: {opacity: 1},
                        exit: {opacity: 0},
                    }}>
                    <HomePage onSearch={() : void => setIsVisible(false)} />
                </motion.div>
            ) :
                <motion.div
                    key="ok2"
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{type: 'linear'}}
                    variants={{
                        hidden: {opacity: 0},
                        enter: {opacity: 1},
                        exit: {opacity: 0},
                    }}>
                    <SearchPage />
                    {/*<div className="flex items-center justify-center">*/}
                    {/*    <p className="text-8xl">*/}
                    {/*        OKJGELISJG*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </motion.div>
            };
        </AnimatePresence>
    );
}

