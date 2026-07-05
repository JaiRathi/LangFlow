import React from 'react';

// Common visual icon mappings for UI nodes based on category/name
export const getNodeIcon = (type, displayName) => {
  const name = (displayName || '').toLowerCase();
  const t = (type || '').toLowerCase();
  
  if (name.includes('jira') || name.includes('ticket')) return '🎫';
  if (name.includes('openai') || name.includes('groq') || name.includes('mistral') || name.includes('openrouter') || name.includes('model') || t.includes('model')) return '🤖';
  if (name.includes('prompt') || t.includes('prompt')) return '📝';
  if (name.includes('request') || name.includes('api') || t.includes('api')) return '🌐';
  if (name.includes('file') || name.includes('reader') || name.includes('document') || t.includes('file') || t.includes('reader')) return '📁';
  if (name.includes('parser') || t.includes('parser')) return '⚙️';
  if (name.includes('output') || name.includes('export') || name.includes('writer') || t.includes('output')) return '📤';
  return '🧩';
};

// Parse workflow JSON to find input nodes, settings, and file upload requirements
export const parseWorkflowData = (flow) => {
  const nodes = flow?.rawData?.data?.nodes || [];
  const edges = flow?.rawData?.data?.edges || [];
  
  const userInputs = [];
  const requiredKeys = new Set();
  let hasJira = false;
  let fileUploads = [];

  nodes.forEach((n) => {
    const node = n?.data?.node || {};
    const displayName = node?.display_name || n?.data?.display_name || '';
    const nodeType = n?.data?.type || '';
    const template = node?.template || {};
    
    // Check for API models
    if (nodeType.toLowerCase().includes('model') || displayName.toLowerCase().includes('mistral') || displayName.toLowerCase().includes('groq') || displayName.toLowerCase().includes('openrouter')) {
      if (displayName.toLowerCase().includes('groq')) requiredKeys.add('groq');
      else if (displayName.toLowerCase().includes('mistral')) requiredKeys.add('mistral');
      else if (displayName.toLowerCase().includes('openrouter')) requiredKeys.add('openrouter');
      else if (displayName.toLowerCase().includes('openai')) requiredKeys.add('openai');
    }

    // Check for Jira integration
    if (displayName.toLowerCase().includes('jira') || nodeType.toLowerCase().includes('jira')) {
      hasJira = true;
    }

    // Map template inputs
    Object.keys(template).forEach((key) => {
      const field = template[key];
      if (typeof field === 'object' && field !== null) {
        const isAdvanced = field.advanced === true;
        const isShow = field.show !== false;
        
        // Find visible user inputs
        if (!isAdvanced && isShow && key !== 'code' && key !== '_type') {
          // Check for files
          if (field.type === 'file' || field._input_type === 'FileInput' || key === 'file_path' || key === 'path') {
            fileUploads.push({
              nodeId: n.id,
              nodeName: displayName,
              fieldName: key,
              field
            });
          } else {
            userInputs.push({
              nodeId: n.id,
              nodeName: displayName,
              fieldName: key,
              field
            });
          }
        }
      }
    });
  });

  return {
    nodes,
    edges,
    userInputs,
    requiredKeys: Array.from(requiredKeys),
    hasJira,
    fileUploads
  };
};
