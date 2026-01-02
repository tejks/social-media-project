# Contributing

Thanks for your interest in contributing! Below are quick guidelines for reporting issues, adding features, and preparing pull requests.

## Reporting Issues

- Use GitHub Issues to report bugs or request features.
- Provide reproduction steps, expected behavior, and app/version details.

## Working on Code

1. Fork the repository and create a branch with a clear prefix (e.g. `feature/`, `fix/`):

```bash
git checkout -b feature/your-feature-name
```

2. Use descriptive commit messages (Conventional Commits are recommended: `feat:`, `fix:`, `chore:`).

3. Keep code style consistent and run linter/formatter if configured.

## Pull Requests

- Open PRs against the `main` branch (or the branch specified by the project).
- Describe the purpose of the changes, what you've tested, and any API impacts.
- Include screenshots for UI changes when applicable.

## PR Checklist

- Code builds locally (`npm run build`).
- No unnecessary dependencies added.
- Unit tests (if present) pass locally.
- Commits and PR description are clear.

## Tests & Quality

- Add unit tests for new features where appropriate.
- If CI is configured (e.g., GitHub Actions), ensure your PR passes the pipeline.

## Contact

If you're planning a larger change, open an Issue first to discuss the scope.

Thanks for contributing — every fix and idea helps!
