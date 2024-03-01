import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import LogoSvg from "@/assets/purplepink/logo-no-background.svg";

export default function Home() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('', {
            method: 'GET',
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <main className="dark">
            <div className="h-screen w-screen bg-gradient-to-b from-black to-[#121212] relative flex flex-col items-center justify-center">
                <BackgroundBeams className="z-0" />

                {/* Radial gradient for the container to give a faded look */}
                {/*<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>*/}

                <div className="flex flex-col items-center w-1/2 h-auto">
                    <Image src={LogoSvg} alt="Logo SVG" className="relative bottom-10 w-1/3 h-auto" />
                    <div className="grid w-full h-full">
                        {/*<SparklesCore*/}
                        {/*    id="tsparticlesfullpage"*/}
                        {/*    background="transparent"*/}
                        {/*    minSize={0.6}*/}
                        {/*    maxSize={1.4}*/}
                        {/*    particleDensity={100}*/}
                        {/*    className="col-start-1 row-start-1 p-2 box-border z-10 h-20 pointer-events-none"*/}
                        {/*/>*/}
                        <Input type="text" name="search" placeholder="Search News"
                               className={"font-semibold text-xl text-[#ebe8e8] " +
                                   "rounded-full pl-8 col-start-1 row-start-1 " +
                                   "bg-gradient-to-br from-[#141414] to-[#090909] border-none " +
                                   "hover:to-[#141414] focus:to-[#141414] focus:placeholder-transparent " +
                                   "hover:shadow-black hover:shadow-lg focus:shadow-black focus:shadow-lg " +
                                   "w-full h-20 focus-visible:ring-offset-0 focus-visible:ring-0"} />
                    </div>
                </div>
            </div>
        </main>
    );
}
