
# Notification-CLI

Minimalistic Command Line Notification Application under 50 Lines

## Quick Start

This will notify you when 2021 February 20, PM 6:00.

```
./noc.js -d 2021022018 --desktop # for desktop notification
```

Very much minimalistic.

## Installation

```
git clone https://github.com/yuis-ice/notification-cli.git
cd notification-cli
chmod 755 ./noc.js
npm i
```

## Requirements

- node.js v13.10.1 or higher

```
# node.js [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
bash
nvm install v13.10.1
node -v
```

## Examples

This will only notify you by command line console output:

```
./noc.js -d 2021022018
```

The output be like:

```
$ ./noc.js -d 202102120234
2021-02-12T02:33:16+09:00 Jobs started...
2021-02-12T02:33:16+09:00 You will be notified at: 2021-02-12T02:34:00+09:00
2021-02-12T02:34:00+09:00 Notified.
$
```

You can abbreviate your seconds, minutes, hours and so on:

```
./noc.js -d 2022
```

This will notify you when PM 11:00 in the day:

```
./noc.js -d 23 --format HH
```

An alias makes your code much more minimalistic:

```
alias notify="./noc.js --format MM,DD,HH" # Specifying absolute path recommended
notify -d 2,20,18
```

This will run your command:

```
./noc.js -d 2021022018 -c "firefox.exe sound.mp3"
```

No logs on background be like:

```
./noc.js -d 2021022018 --desktop --hide-log --log "" &
```

My favorite format <3

```
./noc.js -d 2021022018 -c "firefox.exe sound.mp3" --desktop -t "your appointment soon"
```

## Command line Options

```
$ ./noc.js
Usage: notification-cli [options]

Options:
  -d, --date <date>             specify date to fire (e.g. "2022010100" for 2020/1/1 00:00) (default: null)     
  -f, --format <format>         specify date format (default: "YYYYMMDDHHmmss")
  -D, --desktop                 enables desktop notification
  -t, --title <text>            specify title (default: "Notification-CLI")
  -m, --message <text>          specify message (default: ":)")
  -c, --exec-command <command>  specify command to run (e.g. firefox.exe ringtone.mp3) (default: null)
  -l, --log <text>              specify console log message (default: "Notified.")
  -H, --hide-log                hide information logs
  -h, --help                    display help for command
```

## LICENSE

The software is released under the BSD-3-Clause license.

Copyright (c) 2021, Fumiya Arisaka \<yuis.twitter@gmail.com\> All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE file in the root directory of this source tree.
