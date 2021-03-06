
# Notification-CLI

Minimalistic Command Line Notification Application under 50 Lines

## Quick Start

This will notify you when 2021 February 20, PM 6:00.

```
noc -d 2021022018 --desktop # for desktop notification
```

Very much minimalistic.

## Installation

```
npm install -g notification-cli
```

## Requirements

- node.js v13 or higher

<details>
  <summary>Install node.js?</summary>

  ```
  # node.js [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  bash
  nvm install 13
  node -v
  ```

</details>


## Examples

This will only notify you by command line console output:

```
noc -d 2021022018
```

<details>
  <summary>The output be like:</summary>

  ```
  $ noc -d 202102120234
  2021-02-12T02:33:16+09:00 Jobs started...
  2021-02-12T02:33:16+09:00 You will be notified at: 2021-02-12T02:34:00+09:00
  2021-02-12T02:34:00+09:00 Notified.
  $
  ```

</details>

You can abbreviate your seconds, minutes, hours and so on:

```
noc -d 2022
```

This will notify you when PM 11:00 in the day:

```
noc -d 23 --format HH
```

An alias makes your code much more minimalistic:

```
alias notify="noc --format MM,DD,HH" # Specifying absolute path recommended
notify -d 2,20,18
```

This will run your command:

```
noc -d 2021022018 -c "firefox.exe sound.mp3"
```

No logs on background be like:

```
noc -d 2021022018 --desktop --hide-log --log "" &
```

My favorite format <3

```
noc -d 2021022018 -c "firefox.exe sound.mp3" --desktop -t "your appointment soon"
```

## Command line Options

```
$ noc
Usage: noc [options]

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
