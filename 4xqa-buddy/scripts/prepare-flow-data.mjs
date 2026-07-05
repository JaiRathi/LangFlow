import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..', '..');
const outputFile = path.resolve(__dirname, '..', 'src', 'flow-data.generated.js');

// Dynamically read any .json workflow in the workspace root
const files = fs.readdirSync(workspaceRoot);
const workflowFiles = files.filter(f => f.endsWith('.json') && !f.startsWith('result') && !f.startsWith('package'));

const flows = workflowFiles.map((fileName) => {
  const filePath = path.join(workspaceRoot, fileName);
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  
  // Full workflow JSON is mapped here so React can read and parse everything dynamically
  return {
    id: fileName.replace(/\.json$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: data.name || fileName.replace(/\.json$/i, ''),
    description: data.description || 'Workflow definition imported dynamically.',
    fileName,
    rawData: data // Feed full raw JSON representation
  };
});

const fileContents = `export const flows = ${JSON.stringify(flows, null, 2)};\n`;
fs.writeFileSync(outputFile, fileContents, 'utf8');
console.log(`Dynamically generated ${flows.length} flow definitions.`);
