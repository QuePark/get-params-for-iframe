# get-params-for-iframe
You can get parameters from url, when you use iframe for it.

If there were parent web site and embed other web site using iframe tag, you can get parameters after question mark.

## How to use

```js
const { getParamValue } = require('get-params-for-iframe');
const params = getParamValue();
```

You can get parameters in a query of url. For examples, if there is ex-url `https://quepark.github.io/get-params-for-iframe?query="Hello world!"&username="Gray Gyuha Park"&email="gyuhapark11@gmail.com"`, it will be following object:
```js
{
  query: "Hello world!",
  username: "Gray Gyuha Park",
  email: "gyuhapark11@gmail.com"
}
```

And it needs query. if not, you will get error message "there is no query.".
Please note that this package only works on web site with query.

MIT LISENCE