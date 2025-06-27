#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import crypto from "node:crypto";

try {
  const changed = execSync(
    "pnpm --filter \"...[origin/main]\" exec -- sh -c 'echo $PNPM_PACKAGE_NAME'",
    { encoding: "utf8" }
  )
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!changed.length || changed.includes("No")) {
    console.log("No workspace packages changed; nothing to bump");
    process.exit(0);
  }

  const id = crypto.randomUUID();
  const file = `.changeset/${id}.md`;
  const header = changed.map((pkg) => `"${pkg}": patch`).join("\n");

  writeFileSync(file, `---\n${header}\n---\n\nAutomated patch bump\n`);
  console.log(`🦋  wrote ${file} for: ${changed.join(", ")}`);
} catch (error) {
  console.log("Error detecting changed packages:", error.message);
  console.log(
    "This might be because origin/main does not exist or no packages have changed."
  );
  console.log('Use "pnpm changeset add" to manually add changesets.');
  process.exit(1);
}
