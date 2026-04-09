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
  - <launched> pid=7067
  - [pid=7067][err]
  - [pid=7067][err] (process:7073): Gtk-WARNING **: 09:36:06.983: Failed to open display
  - [pid=7067] <gracefully close start>
  - [pid=7067] <kill>
  - [pid=7067] <will force kill>
  - [pid=7067] <process did exit: exitCode=1, signal=null>
  - [pid=7067] starting temporary directories cleanup
  - [pid=7067] finished temporary directories cleanup
  - [pid=7067] <gracefully close end>

```