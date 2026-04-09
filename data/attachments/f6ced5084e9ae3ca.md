# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdactinLoginDD.spec.js >> Data Driven Test using Trends062 and HYT56
- Location: tests/AdactinLoginDD.spec.js:12:9

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-cKkySE -juggler-pipe --start-maximized -silent
  - <launched> pid=6723
  - [pid=6723][err] [6725] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6723][err] Error: no DISPLAY environment variable specified
  - [pid=6723] <process did exit: exitCode=1, signal=null>
  - [pid=6723] starting temporary directories cleanup
  - [pid=6723] <gracefully close start>
  - [pid=6723] <kill>
  - [pid=6723] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6723] finished temporary directories cleanup
  - [pid=6723] <gracefully close end>

```