import axios from 'axios';

export type User = {
  name: string;
  bio: string;
}

export async function getBio(username: string): Promise<User> {
  const url = `https://api.github.com/users/${username}`;

  const { data } = await axios.get<User>(url);
  return { name: data.name, bio: data.bio };
}