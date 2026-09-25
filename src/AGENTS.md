# AGENTS.md

Guidance for AI agents working under `src/`, in addition to the
[repository-wide guidance](../AGENTS.md).

## Errors

- A function rejects an invalid argument by throwing a `RangeError` or
  a `TypeError`, never a plain `Error`.
