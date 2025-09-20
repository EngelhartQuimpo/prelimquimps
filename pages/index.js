import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./Hero"
import Carousel from "./Carousel";




export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <Carousel/>
    </div>
    </>
  );
}
