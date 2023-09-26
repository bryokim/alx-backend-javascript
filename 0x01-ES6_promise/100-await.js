import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const data = await Promise.all([uploadPhoto(), createUser()])
    .then((data) => data)
    .catch(() => [null, null]);

  return {
    photo: data[0],
    user: data[1],
  };
}
