import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ActionAreaCard from "./Testimonials";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // Removing snap property if it's not needed
          // Removing the end property to automatically calculate based on the content
          end: () => "+=" + slider.current.scrollWidth
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="" ref={component}>
      <div className="firstContainer">
        <h1 className="sail">Testimonials</h1>
      </div>
      <div ref={slider} className="container" style={{ display: "flex", overflow: "hidden" }}>
        <div className="panel" style={{ flex: "0 0 100%" }}>
          <ActionAreaCard
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Lizard"
            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species."
          />
        </div>
        <div className="panel" style={{ flex: "0 0 100%" }}>
          <ActionAreaCard
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Chameleon"
            description="Chameleons are distinctive and highly specialized clade of Old World lizards."
          />
        </div>
        <div className="panel" style={{ flex: "0 0 100%" }}>
          <ActionAreaCard
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Gecko"
            description="Geckos are small, mostly nocturnal reptiles with a characteristic chirping vocalization."
          />
        </div>
        <div className="panel" style={{ flex: "0 0 100%" }}>
          <ActionAreaCard
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Iguana"
            description="Iguanas are herbivorous lizards native to tropical areas of Central and South America."
          />
        </div>
      </div>
    </div>
  );
}
