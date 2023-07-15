export const append_233 = (phone: string ) => {
  console.log(phone);
  const char = phone[0];
  const replaced = phone.replace(char, "233");
  return replaced;
};
