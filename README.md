# claude-test

A scratch repository for exercising the Claude Code review workflow
in isolation, so the poupe-ui repositories that ship code do not
collect diagnostic commits.

## Why it exists

In `poupe-ui/eslint-plugin-tailwindcss` the review job exited
`success` on eight pull requests without ever posting a comment. The
one run whose log survived recorded two permission denials and an
empty inline-comment buffer, and the SDK output is suppressed by
default, so the denied tools could not be named.

Two things make that hard to investigate in place:

- The action refuses to run when the workflow file on the branch
  differs from the copy on the default branch, so a pull request that
  edits the review workflow can never exercise it.
- A skipped action still reports `success`, so a green check does not
  mean a review happened.

Here the workflow ships on `main` from the first commit with
`show_full_output: true`, so any pull request opened against it runs
the real thing with its output visible.

## Layout

- `.github/workflows/claude-code-review.yml` — the workflow under
  test, matching the sibling repositories apart from the diagnostic
  settings.
- `src/` — throwaway code that exists only to give the reviewer
  something to look at.
