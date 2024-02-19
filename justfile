_default:
  @just --choose

playground:
  @rm -rf ./react-devine/dist/ > /dev/null && pnpm --filter playground dev

site:
  @pnpm --filter website dev

api:
  @pnpm --filter @api/server dev

gen-supabase-types:
  @pnpm --filter api gen-supabase-types

build:
  @pnpm --filter react-devine build

test-publish:
  @cd react-devine/ && npm publish --dry-run

publish:
  @cd react-devine/ && npm publish
