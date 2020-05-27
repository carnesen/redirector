# @carnesen/redirector [![npm version badge](https://badge.fury.io/js/%40carnesen%2Fredirector.svg)](https://badge.fury.io/js/%40carnesen%2Fredirector) [![build status badge](https://github.com/carnesen/redirector/workflows/test/badge.svg)](https://github.com/carnesen/redirector/actions?query=workflow%3Atest+branch%3Amaster)
A Node.js http server that redirects example.com to www.example.com.

This service is deployed at [https://carnesen.com](https://carnesen.com). In a browser it won't be obvious, but notice how you end up at www.carnesen.com. In a terminal do `curl -v https://carnesen.com` to see the 301 redirect response.

## Usage
See [@carnesen/google-cloud](https://github.com/carnesen/google-cloud#usage) for an example of how I use this package.

## Related
- [@carnesen/carnesen-dot-com](https://github.com/carnesen/carnesen-dot-com): Automates deployment of carnesen.com to Google Cloud Platform

## License
MIT © [Chris Arnesen](https://www.carnesen.com)
