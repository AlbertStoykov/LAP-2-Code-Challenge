# LAP 2 Code Challenge - Wednesday

## Installation & Usage

### Installation

- Cloned the repo.

### Usage

- Run `bash _scripts/startDev.sh` to start client, api & db services.
- Run `bash _scripts/startTest.sh` to start api & db services.
- Run `bash _scripts/teardown.sh` to stop all running services.

- Do not run both dev and test environments at the same time!

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
