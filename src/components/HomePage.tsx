import {BackgroundBeams} from "@/components/ui/background-beams";
import Image from "next/image";
import LogoSvg from "@/assets/purplepink/logo-no-background.svg";
import {Input} from "@/components/ui/input";
import { postQuery } from "@/app/actions";

// @ts-ignore
export default function HomePage({ onSearch }) {
    const handleSubmit = (formData: FormData) => {
        onSearch();
        postQuery(formData);
    }

    return (
        <div className="h-screen w-screen relative flex flex-col items-center justify-center">
            <BackgroundBeams className="z-0 pointer-events-none" />

            <div className="flex flex-col items-center w-1/2 h-auto">
                <Image src={LogoSvg} alt="Logo SVG" className="relative bottom-10 w-1/3 h-auto" />
                <div className="grid w-full h-full">
                    <form action={handleSubmit}>
                        <Input type="text" name="search" placeholder="Search News"
                               className={"font-semibold text-xl text-[#ebe8e8] " +
                                   "rounded-full pl-8 col-start-1 row-start-1 " +
                                   "bg-gradient-to-br from-[#141414] to-[#090909] border-none z-40 " +
                                   "hover:to-[#141414] focus:to-[#141414] focus:placeholder-transparent " +
                                   "hover:shadow-black hover:shadow-lg focus:shadow-black focus:shadow-lg " +
                                   "w-full h-20 focus-visible:ring-offset-0 focus-visible:ring-0"} />
                    </form>
                </div>
            </div>
        </div>
    );
}

{/*<SparklesCore*/}
{/*    id="tsparticlesfullpage"*/}
{/*    background="transparent"*/}
{/*    minSize={0.6}*/}
{/*    maxSize={1.4}*/}
{/*    particleDensity={100}*/}
{/*    className="col-start-1 row-start-1 p-2 box-border z-10 h-20 pointer-events-none"*/}
{/*/>*/}
