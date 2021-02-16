#!/usr/bin/env node

// e.g.
// ./noc.js -d 202102120156 -f YYYYMMDDHHmm -c "firefox.exe sound.mp3" --desktop -t "your appointment soon"
// ./noc.js -d 202102120159 -f YYYYMMDDHHmm -c "firefox.exe sound.mp3" --desktop -t "your appointment soon" --hide-log &

const commander = require('commander');
const program = new commander.Command();

program
  .option('-d, --date <date>', 'specify date to fire (e.g. "2022010100" for 2020/1/1 00:00)', null )
  .option('-f, --format <format>', 'specify date format', "YYYYMMDDHHmmss" )
  .option('-D, --desktop', 'enables desktop notification')
  .option('-t, --title <text>', 'specify title', "Notification-CLI" )
  .option('-m, --message <text>', 'specify message', ":)" ) // cannot be null or empty
  .option('-c, --exec-command <command>', 'specify command to run (e.g. firefox.exe ringtone.mp3)', null )
  // .option('-l, --local-time <number>', 'adjust date time to local time (e.g. "+9" for Japan)', 9) // no needed to adjust to local time
  .option('-l, --log <text>', 'specify console log message', "Notified.")
  .option('-H, --hide-log', 'hide information logs')
  .parse(process.argv)
  ;
  if (! process.argv.slice(2).length) program.help() ;

const sleep = require('sleep');
const exec = require('child_process').exec;
const moment = require('moment');
const schedule = require('node-schedule');
const notifier = require('node-notifier');

const job = schedule.scheduleJob(
  // moment("20170101173000", "YYYYMMDDHHmmss").add(9, 'hours').toDate(),
  // moment(program.date, program.format).add(program.localTime, 'hours').toDate(), // no needed to adjust to local time
  moment(program.date, program.format).toDate(),
  async function(){
    if (program.log)
      console.log(moment().format(), program.log);
    if (program.desktop)
      notifier.notify({
        title: program.title,
        message: program.message,
        sound: true, // seems not works for windows
        wait: true
      });
    if (program.execCommand)
      await exec(program.execCommand, (error, stdout, stderr) => { if (error) console.log(error); if (stdout) console.log(stdout); if (stderr) console.log(stderr); });
  }
);

if (! program.hideLog) console.log(moment().format(), "Jobs started...");
if (! program.hideLog) console.log(moment().format(), "You will be notified at:", moment(program.date, program.format).format());
