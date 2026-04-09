# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdactinLoginDD.spec.js >> Data Driven Test using Trends0620 and JKIY
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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-nsIAXE -juggler-pipe --start-maximized -silent
  - <launched> pid=6561
  - [pid=6561][err] [6563] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6561][err] Error: no DISPLAY environment variable specified
  - [pid=6561] <process did exit: exitCode=1, signal=null>
  - [pid=6561] starting temporary directories cleanup
  - [pid=6561] <gracefully close start>
  - [pid=6561] <kill>
  - [pid=6561] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6561] finished temporary directories cleanup
  - [pid=6561] <gracefully close end>

```