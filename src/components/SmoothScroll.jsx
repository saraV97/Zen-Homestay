"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";

function SmoothScroll({ children }) {
  // const lenisRef = useRef();
  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000);
  //   }
  //   gsap.ticker.add(update);

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // }, []);

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });
  return (
    <ReactLenis
      root
      // ref={lenisRef}
      // autoRaf={false}
      options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
    >
      {children}
    </ReactLenis>
  );
}
export default SmoothScroll;
