import { auth } from './firebase';

const API = 'http://localhost:3333';

/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endPointURL, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());

  const res = await fetch(`${API}/${endPointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}