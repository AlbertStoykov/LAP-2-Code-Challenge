# LAP 2 Code Challenge - Wednesday

## Installation & Usage

### Installation

- Cloned the repo.

### Usage

- Run `bash _scripts/startDev.sh` to start client, api & db services.
- Run `bash _scripts/startTest.sh` to start api & db services.
- Run `bash _scripts/teardown.sh` to stop all running services.

- Do not run both dev and test environments at the same time!

## Changelog

- Created workREADME file to log usage, changes, bugs, challenges etc.
- Updated docker-compose.yaml, which made "docker compose up" to work properly in the console.
- Installed dependencies.
- Found db name and password in test.yaml and dev.yaml, updated docker-compose.yaml.
- Updated Error Status Codes.
- Added routes in books.js and authors.js, changed "" to `` in author.js
- Added create, destroy functions inside author.js, as these were missing.
- moved client folder inside mca-client.
- Replaced innerHTML with textContent to improve security.
- Found and tried to update more inconsistencies in book.js and author.js

### books.js, authors.js

[x] Added post and delete routes in books.js and authors.js.
[x] Created create and destroy functions inside authors.js, as these were missing.
[x] Updated more inconsistencies in book.js and author.js.

## Bugs

[] startDev.sh command ends with npm ERR! enoent ENOENT: no such file or directory, open '/package.json'
[] startTest.sh command ends with debug_dev_api | npm ERR! enoent This is related to npm not being able to find a file.
[] Server not starting at all, when it worked at the beginning. Attempted stop.sh and teardown.sh, but it did not start working again.
[] Tried deleting package-lock.json, then running npm install and npm update, still not working.

## Wins & Challenges

### Wins

- Updating book.js and authors.js

### Challenges

- Confused why mca-client is empty and what I'm supposed to do with that.
- No idea why server stopped working half way through.
- Figuring out how to make authors and books buttons to work and display the requested data.
- Working my way around so many files and folders, very difficult to understand the logic behind the structure.
