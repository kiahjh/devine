_default:
  @just --choose

build:
  @pnpm --filter react-devine build

dev-playground:
  @pnpm --filter playground dev

dev-docs:
  @pnpm --filter docs dev

test-publish:
  @cd react-devine/ && npm publish --dry-run

publish:
  @cd react-devine/ && npm publish
