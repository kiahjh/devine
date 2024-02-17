_default:
  @just --choose

dev-playground:
  @rm -rf ./react-devine/dist/ > /dev/null && pnpm --filter playground dev

dev-site:
  @pnpm --filter website dev

dev-api:
  @pnpm --filter api dev

gen-supabase-types:
  @pnpm --filter api gen-supabase-types

build:
  @pnpm --filter react-devine build

test-publish:
  @cd react-devine/ && npm publish --dry-run

publish:
  @cd react-devine/ && npm publish
