const id = 1111
const password = 'password123';
const name = 'John Doe';
const iconURL = 'https://example.com/icon.png';
const cred = new PasswordCredential({
  id,
  password,
  name,
  iconURL,
});
navigator.credentials.store(cred).then(() => {
  // Do something else.
});
console.log(await navigator.credentials.get());