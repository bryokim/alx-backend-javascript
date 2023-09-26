export default function handleResponseFromAPI(promise) {
  promise
    .then(
      () => ({ status: 200, body: 'success' }),
      () => Error(),
    )
    .then(() => console.log('Got a response from the API'));
}
