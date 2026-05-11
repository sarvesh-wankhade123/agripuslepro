// ============================================
// AgriPulse Pro — User Credentials Store
// ============================================
// Each user record holds a username and password
// used for client-side authentication on the
// login page. In a production system this would
// live in a secure server-side database.

const users = [
  {
    username: "sarvesh wankhade",
    password: "sarvesh@1234",
  },
  {
    username: "mandar sadavate",
    password: "mandar@1234",
  },
  {
    username: "gajanan wankhede",
    password: "gajanan@1234",
  },
  {
    username: "varad salunke",
    password: "varad@1234",
  },
];

/**
 * Authenticate a user against the stored credentials.
 * @param {string} username
 * @param {string} password
 * @returns {{ success: boolean, user?: object, message: string }}
 */
function authenticate(username, password) {
  const trimmedUser = username.trim().toLowerCase();
  const match = users.find(
    (u) => u.username.toLowerCase() === trimmedUser && u.password === password
  );

  if (match) {
    return {
      success: true,
      user: { username: match.username },
      message: "Login successful",
    };
  }
  return { success: false, message: "Invalid username or password" };
}

export { users, authenticate };
