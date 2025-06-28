#!/usr/bin/env node
import { writeFileSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import crypto from "node:crypto";

function getPackageVersion(packageName, branch = "HEAD") {
  try {
    const packageJsonPath = `packages/${packageName.replace(
      "@ncronquist/",
      ""
    )}/package.json`;
    const content = execSync(`git show ${branch}:${packageJsonPath}`, {
      encoding: "utf8",
    });
    return JSON.parse(content).version;
  } catch (error) {
    console.warn(
      `Could not get version for ${packageName} from ${branch}:`,
      error.message
    );
    return null;
  }
}

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

  // Filter out packages that have already been version-bumped
  const packagesToBump = [];
  for (const pkg of changed) {
    const currentVersion = getPackageVersion(pkg, "HEAD");
    const mainVersion = getPackageVersion(pkg, "origin/main");

    if (currentVersion && mainVersion) {
      if (currentVersion === mainVersion) {
        console.log(`📦  ${pkg}: version ${currentVersion} (needs bump)`);
        packagesToBump.push(pkg);
      } else {
        console.log(
          `✅  ${pkg}: already bumped from ${mainVersion} to ${currentVersion} (skipping)`
        );
      }
    } else {
      // If we can't determine versions, include it to be safe
      console.log(
        `❓  ${pkg}: could not determine version status (including to be safe)`
      );
      packagesToBump.push(pkg);
    }
  }

  if (!packagesToBump.length) {
    console.log("🎉  All changed packages have already been version-bumped!");
    process.exit(0);
  }

  const id = crypto.randomUUID();
  const file = `.changeset/${id}.md`;
  const header = packagesToBump.map((pkg) => `"${pkg}": patch`).join("\n");

  writeFileSync(file, `---\n${header}\n---\n\nAutomated patch bump\n`);
  console.log(`🦋  wrote ${file} for: ${packagesToBump.join(", ")}`);

  // Apply the changeset immediately to update package.json files
  console.log("🚀  Applying changesets to update package versions...");
  execSync("pnpm changeset version", {
    encoding: "utf8",
    stdio: "inherit", // Show output in real-time
  });

  console.log("✅  Package versions updated successfully!");
} catch (error) {
  console.log(
    "Error detecting changed packages or applying changesets:",
    error.message
  );
  console.log(
    "This might be because origin/main does not exist or no packages have changed."
  );
  console.log('Use "pnpm changeset add" to manually add changesets.');
  process.exit(1);
}
