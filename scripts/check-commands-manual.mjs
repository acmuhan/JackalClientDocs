import { execSync } from 'node:child_process';

try {
  execSync('node scripts/generate-commands-manual.mjs', { stdio: 'inherit' });
  execSync('git diff --exit-code -- docs/commands', { stdio: 'inherit' });
  console.log('Command manual is up to date.');
} catch (error) {
  console.error('\nCommand manual is out of date. Run: npm run docs:commands');
  process.exit(1);
}
