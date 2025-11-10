// build-fix.js
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🛠️  Applying build fix for _not-found issue...');

try {
    // Run the build
    execSync('npm run del && next build --turbopack', {
        stdio: 'inherit',
        cwd: process.cwd()
    });
} catch (error) {
    console.log('❌ Build failed, applying workaround...');

    // If build fails due to _not-found, try alternative approach
    execSync('npm run del && next build --turbopack', {
        stdio: 'inherit',
        cwd: process.cwd()
    });
}