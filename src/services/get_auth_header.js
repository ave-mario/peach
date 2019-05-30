export default function getAuthHeader() {
  const token = localStorage.getItem('auth token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}
