// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat', // New feature
          'fix', // Bug fix
          'docs', // Documentation update
          'style', // Code style (formatting, missing semi-colons, etc.)
          'refactor', // Code refactoring (neither a fix nor a feature)
          'perf', // Performance improvement
          'test', // Adding or updating tests
          'build', // Build system changes (npm, husky, webpack, etc.)
          'ci', // CI/CD related changes
          'chore', // Routine tasks (dependency updates, etc.)
          'revert' // Reverting previous commits
        ]
      ],
      'subject-case': [2, 'always', 'sentence-case'], // Ensures commit messages start with an uppercase letter
      'header-max-length': [2, 'always', 100] // Limits commit message length to 100 characters
    }
  };
  