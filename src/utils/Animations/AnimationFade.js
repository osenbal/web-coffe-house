const variant = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const AnimationFade = {
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true, amount: 1 },
  variants: variant,
};

export default AnimationFade;
