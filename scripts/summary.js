const fs = require('fs');
const path = require('path');

const resultPath = path.join(__dirname, '../test-results/results.json');

if (!fs.existsSync(resultPath)) {
    console.log('❌ No results file found!');
    process.exit(0);
}

const data = JSON.parse(fs.readFileSync(resultPath, 'utf-8'));

let total = 0;
let passed = 0;
let failed = 0;
let skipped = 0;
let duration = 0;

for (const suite of data.suites || []) {
    for (const spec of suite.specs || []) {
        for (const test of spec.tests || []) {
            total++;
            if (test.results?.length) {
                const status = test.results[0].status;
                if (status === 'passed') passed++;
                else if (status === 'failed') failed++;
                else skipped++;
                duration += test.results[0].duration;
            }
        }
    }
}

const seconds = (duration / 1000).toFixed(1);

const summary = `
- Playwright Test Summary
- Passed: ${passed}
- Failed: ${failed}
- Skipped: ${skipped}
- Total: ${total}
- Duration: ${seconds}s
`;

fs.writeFileSync('summary.txt', summary.trim());
console.log(summary);