export const dateStartFrom = (date) => {
  if (new Date(date) >= new Date()) {
    return new Date();
  }
  return "Due date cannot be in the past";
};
