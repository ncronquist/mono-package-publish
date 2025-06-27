# Contributing to Mono Package Publish

This monorepo uses [Changesets](https://github.com/changesets/changesets) for automated package versioning and publishing to GitHub's private npm registry.

## Quick Workflow for Contributors

When you make changes to any package, follow these three steps:

### 1. Generate Changesets
```bash
pnpm run changeset:auto-patch   # Automatically creates patch bumps for changed packages
```

This command detects which packages have changed since `origin/main` and creates appropriate changesets.

### 2. Review and Adjust (Optional)
- The auto-patch script creates **patch** bumps by default
- If you need a **minor** or **major** bump, manually edit the generated changeset file in `.changeset/`
- Or manually adjust the version in `package.json`

### 3. Commit Your Changes
```bash
git add .changeset/ package.json packages/
git commit -m "feat(pkg-name): your change description"
```

## Manual Changeset Creation

If you prefer manual control or the auto-patch script doesn't work for your case:

```bash
pnpm changeset add  # Interactive prompt to select packages and bump types
```

## Publishing Process

When changes are merged to `main`, the GitHub Action automatically:

1. Applies any pending changesets (`pnpm changeset version`)
2. Publishes updated packages to GitHub Packages (`pnpm publish -r --no-git-checks`)

## Key Points

- ✅ The auto-patch script is **safe to run multiple times** - Changesets automatically merges duplicate files
- ✅ Only packages with **new versions** are published - existing versions are skipped
- ✅ **No version-update PRs** - versions are bumped directly in your feature branch
- ✅ Publishing happens **automatically** on merge to main

## Troubleshooting

If the auto-patch script shows "No workspace packages changed":
- Make sure you have changes committed that differ from `origin/main`
- Check that `origin/main` exists: `git fetch origin`
- Use manual changesets: `pnpm changeset add`
