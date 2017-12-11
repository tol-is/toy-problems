export function isRotatedSubstring(s1, s2) {
  if (!s1 || !s2) throw new Error('invalid input');
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}
