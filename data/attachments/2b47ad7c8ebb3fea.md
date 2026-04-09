# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdactinApp.spec.js >> Adactin Hotel App
- Location: tests/AdactinApp.spec.js:8:5

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
  - <launched> pid=7124
  - [pid=7124][err]
  - [pid=7124][err] (process:7130): Gtk-WARNING **: 09:41:03.465: Failed to open display
  - [pid=7124] <gracefully close start>
  - [pid=7124] <kill>
  - [pid=7124] <will force kill>
  - [pid=7124] <process did exit: exitCode=1, signal=null>
  - [pid=7124] starting temporary directories cleanup
  - [pid=7124] finished temporary directories cleanup
  - [pid=7124] <gracefully close end>

```