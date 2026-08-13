Supernova

The project uses the STRATZ GraphQL API.

To use the player search functionality, you need a STRATZ Bearer token.

Create your own token and configure it according to the instructions below.
````md
### How to configure STRATZ API

1. Create a STRATZ API token from your STRATZ account.

2. Copy your Bearer token.

3. Open `src/services/stratzApi.js`.

4. Find the `Authorization` header:

```js
"Authorization": "Bearer YOUR_TOKEN_HERE"
````

5. Replace `YOUR_TOKEN_HERE` with your own token.

For example:

```js
"Authorization": "Bearer eyJhbGciOi..."
```

6. Save the file and run the project again.

````


> Never commit your real Bearer token to GitHub.
