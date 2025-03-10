---
title: Security updates for all active release lines, July 2017
blogAuthors: ['mhdawson']
category: 'vulnerabilities'
---

# _(Update 10-August-2017)_ Snapshots Re-enabled on 8.3.0

The vulnerability has been patched upstream and snapshots have been re-enabled in 8.3.0

Expect a backport and update with the next release of 6.x

**Download**

* [Node.js v8 (Current)](https://nodejs.org/en/blog/release/v8.3.0)

## _(Update 11-July-2017)_ Security releases available

## Summary

Updates are now available for all active Node.js release lines as well as the 7.x line. These include the fix for the high severity vulnerability identified in the initial announcement, one additional lower priority Node.js vulnerability in the 4.x release line, as well as some lower priority fixes for Node.js dependencies across the current release lines.

We recommend that users of all these release lines upgrade as soon as possible.

**Downloads**

* [Node.js v8 (Current)](https://nodejs.org/en/blog/release/v8.1.4)
* [Node.js v7](https://nodejs.org/en/blog/release/v7.10.1)
* [Node.js v6 (LTS "Boron")](https://nodejs.org/en/blog/release/v6.11.1)
* [Node.js v4 (LTS "Argon")](https://nodejs.org/en/blog/release/v4.8.4)

**Note:** The 0.10.x and 0.12.x release lines are also vulnerable to the **Constant Hashtable Seeds** vulnerability. We recommend that users of these release lines upgrade to one of the supported LTS release lines.

## Node.js-specific security flaws

**Constant Hashtable Seeds (CVE-2017-11499)**

Node.js was susceptible to hash flooding remote DoS attacks as the HashTable seed was constant across a given released version of Node.js. This was a result of building with V8 snapshots enabled by default which caused the initially randomized seed to be overwritten on startup. Thanks to Jann Horn of Google Project Zero for reporting this vulnerability.

You can read about the general category of hash flooding vulnerabilities here: <https://events.ccc.de/congress/2011/Fahrplan/attachments/2007_28C3_Effective_DoS_on_web_application_platforms.pdf>.

Snapshots have been disabled by default in these updates. Code that relies heavily on `vm.runInNewContext` will most likely see a performance regression until a better solution is implemented.

This is a high severity vulnerability and applies to all active release lines (4.x, 6.x, 8.x) as well as the 7.x line.

**http.get with numeric authorization options creates uninitialized buffers**

Application code that allows the auth field of the options object used with http.get() to be set to a number can result in an uninitialized buffer being created/used as the authentication string. For example:

    const opts = require('url').parse('http://127.0.0.1:8180');
    opts.auth = 1e3; // A number here triggers the bug
    require('http').get(opts, res => res.pipe(process.stdout));

Parsing of the auth field has been updated in the 4.x release so that a TypeError will be thrown if the auth field is a number when http.get() is called.

This is a low severity defect and only applies to the 4.x release line.

## Vulnerabilities in dependencies

The releases for the affected Node.js release lines have been updated to include the patches need to address the following issues in Node.js dependencies. These are all considered to be low severity for Node.js due to the limited impact or likelihood of exploit in the Node.js environment.

**CVE-2017-1000381 - c-ares NAPTR parser out of bounds access**

A security vulnerability has been discovered in the c-ares library that is bundled with all versions of Node.js. Parsing of NAPTR responses could be triggered to read memory outside of the given input buffer through carefully crafted DNS response packets. The patch recommended in [CVE-2017-1000381](https://c-ares.haxx.se/adv_20170620.html) has been added to the version of c-ares in Node.js in these releases.

This is a low severity defect and affects all active release lines (4.x, 6.x and 8.x) as well as the 7.x line.

_**Original post is included below**_

***

## Summary

The Node.js project will be releasing new versions across all of its active release lines (4.x, 6.x, 8.x) as well as 7.x the week of July 10th 2017 to incorporate a security fix.

## Denial of Service Vulnerability

All current versions of v4.x through to v8.x inclusive are vulnerable to an issue that can be used by an external attacker to cause a denial of service. The severity of this vulnerability is high and users of the affected versions should plan to upgrade when a fix is made available.

## Impact

* Versions 4.x of Node.js **are vulnerable**
* Versions 6.x of Node.js **are vulnerable**
* Versions 7.x of Node.js **are vulnerable**
* Versions 8.x of Node.js **are vulnerable**

## Release timing

Releases will be available at, or shortly after, Tuesday the 11th of July along with disclosure of the details for the vulnerability in order to allow for complete impact assessment by users.

## Contact and future updates

The current Node.js security policy can be found at <https://github.com/nodejs/node/blob/HEAD/SECURITY.md#security>.

Please contact <security@nodejs.org> if you wish to report a vulnerability in Node.js.

Subscribe to the low-volume announcement-only nodejs-sec mailing list at <https://groups.google.com/forum/#!forum/nodejs-sec> to stay up to date on security vulnerabilities and security-related releases of Node.js and the projects maintained in the [nodejs GitHub organization](https://github.com/nodejs/).
