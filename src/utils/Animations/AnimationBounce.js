const variant = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const AnimationBouncing = {
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true, amount: 1 },
  variants: variant,
};

export default AnimationBouncing;
