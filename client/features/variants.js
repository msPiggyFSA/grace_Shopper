export const container = {
  initial: { x: -300 },
  visible: { x: 0, transition: { duration: 1.5 } },
  exit: { x: -300, transition: { duration: 0.5 } },
  prev: { x: -300, transition: { duration: 0.5 } },
  next: { x: 300, transition: { duration: 0.5 } },
};
// initial={{ x: -300 }}
//       animate={{ x: 0 }}
//       transition={{ duration: 1.5 }}
//       exit={{ opacity: 0 }}

export default container;

export const navHover = {
  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
};
