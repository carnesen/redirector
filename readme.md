# **@carnesen/redirector**

A Node.js web server that redirects e.g. example.com to www.example.com

[![build status badge](https://github.com/carnesen/redirector/workflows/test/badge.svg)](https://github.com/carnesen/redirector/actions?query=workflow%3Atest+branch%3Amaster) [![npm version badge](https://badge.fury.io/js/%40carnesen%2Fredirector.svg)](https://www.npmjs.com/package/@carnesen/redirector) [![github stars badge](https://img.shields.io/github/stars/carnesen/redirector)](https://github.com/carnesen/redirector)

This service is deployed at [https://carnesen.com](https://carnesen.com). It's not easy to see in a browser (especially Google Chrome) because they often don't display the leading "www" on the URL. In a terminal though do:
```
curl -v https://carnesen.com
```
and notice the 301 redirect response to www.

## Usage
This package gets deployed by [**@carnesen/google-cloud**](https://github.com/carnesen/google-cloud#usage) as the default Google App Engine service.

## Related
- [**@carnesen/carnesen-dot-com**](https://github.com/carnesen/carnesen-dot-com): Automates deployment of carnesen.com to Google Cloud Platform

## License
MIT © [Chris Arnesen](https://www.carnesen.com)
