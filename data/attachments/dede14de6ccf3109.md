# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdactinLoginDD.spec.js >> Data Driven Test using Trends06207 and KKHHYY
- Location: tests/AdactinLoginDD.spec.js:12:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --no-startup-window --start-maximized
  - <launched> pid=7403
  - [pid=7403][err]
  - [pid=7403][err] (process:7409): Gtk-WARNING **: 09:41:14.034: Failed to open display
  - [pid=7403] <gracefully close start>
  - [pid=7403] <kill>
  - [pid=7403] <will force kill>
  - [pid=7403] <process did exit: exitCode=1, signal=null>
  - [pid=7403] starting temporary directories cleanup
  - [pid=7403] finished temporary directories cleanup
  - [pid=7403] <gracefully close end>

```