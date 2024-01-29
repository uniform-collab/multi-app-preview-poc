import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

const Hero = () => (
  <div>
    <UniformText
      parameterId="title"
      as="h1"
      placeholder="Hero title goes here"
    />
    <UniformRichText parameterId="description" />
  </div>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
