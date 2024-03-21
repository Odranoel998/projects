export const authRequired = (req, res, next) => {
  console.log("Validing token");
  next();
};
