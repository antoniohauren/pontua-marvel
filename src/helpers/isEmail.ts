export function isEmail(email: string) {
  if (!email) return false;

  const re = /\S+@\S+\.\S+/;

  return re.test(email);
}
