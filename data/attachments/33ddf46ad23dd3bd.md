# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> get started link
- Location: tests/example.spec.js:11:5

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
  - <launched> pid=7716
  - [pid=7716][err]
  - [pid=7716][err] (process:7722): Gtk-WARNING **: 09:36:30.062: Failed to open display
  - [pid=7716] <gracefully close start>
  - [pid=7716] <kill>
  - [pid=7716] <will force kill>
  - [pid=7716] <process did exit: exitCode=1, signal=null>
  - [pid=7716] starting temporary directories cleanup
  - [pid=7716] finished temporary directories cleanup
  - [pid=7716] <gracefully close end>

```