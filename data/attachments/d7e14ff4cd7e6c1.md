# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdactinLoginDD.spec.js >> Data Driven Test using Trends06208 and J5TKD6
- Location: tests/AdactinLoginDD.spec.js:12:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
<launched> pid=6439
[pid=6439][err] Cannot parse arguments: Unknown option --start-maximized
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
  - <launched> pid=6439
  - [pid=6439][err] Cannot parse arguments: Unknown option --start-maximized
  - [pid=6439] <gracefully close start>
  - [pid=6439] <kill>
  - [pid=6439] <will force kill>
  - [pid=6439] <process did exit: exitCode=1, signal=null>
  - [pid=6439] starting temporary directories cleanup
  - [pid=6439] finished temporary directories cleanup
  - [pid=6439] <gracefully close end>

```