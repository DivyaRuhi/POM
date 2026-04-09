# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactinWithJson.spec.js >> Adactin Hotel App
- Location: tests/adactinWithJson.spec.js:9:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
<launched> pid=6860
[pid=6860][err] Cannot parse arguments: Unknown option --start-maximized
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
  - <launched> pid=6860
  - [pid=6860][err] Cannot parse arguments: Unknown option --start-maximized
  - [pid=6860] <gracefully close start>
  - [pid=6860] <kill>
  - [pid=6860] <will force kill>
  - [pid=6860] <process did exit: exitCode=1, signal=null>
  - [pid=6860] starting temporary directories cleanup
  - [pid=6860] finished temporary directories cleanup
  - [pid=6860] <gracefully close end>

```