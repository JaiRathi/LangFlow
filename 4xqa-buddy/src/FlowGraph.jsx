import React from 'react';

export default function FlowGraph({ nodes, edges, activeNodeId, onNodeClick }) {
  if (!nodes || nodes.length === 0) return null;

  // Let's lay out the nodes in columns based on their connections/types
  // We'll calculate columns dynamically
  const columns = [];
  const visited = new Set();
  
  // Categorize nodes roughly
  const inputNodes = nodes.filter(n => {
    const name = (n.data?.node?.display_name || '').toLowerCase();
    const type = (n.data?.type || '').toLowerCase();
    return name.includes('input') || type.includes('input') || type === 'file' || name.includes('reader');
  });

  const processNodes = nodes.filter(n => {
    const name = (n.data?.node?.display_name || '').toLowerCase();
    const type = (n.data?.type || '').toLowerCase();
    return !inputNodes.includes(n) && !name.includes('output') && !name.includes('exporter') && !name.includes('writer');
  });

  const outputNodes = nodes.filter(n => {
    const name = (n.data?.node?.display_name || '').toLowerCase();
    return name.includes('output') || name.includes('exporter') || name.includes('writer');
  });

  columns.push(inputNodes);
  columns.push(processNodes);
  columns.push(outputNodes);

  return (
    <div className="flow-graph-container">
      <h3>🔌 Interactive Topology Map</h3>
      <p className="graph-sub">View node connectivity pipeline. Click a node to view or override properties.</p>
      
      <div className="flow-columns">
        {columns.map((colNodes, colIndex) => {
          if (colNodes.length === 0) return null;
          return (
            <div key={colIndex} className="flow-column">
              <div className="column-header">
                {colIndex === 0 ? 'Inputs' : colIndex === 1 ? 'Processing & LLM' : 'Outputs'}
              </div>
              <div className="column-nodes">
                {colNodes.map((n) => {
                  const displayName = n.data?.node?.display_name || n.data?.display_name || n.id;
                  const type = n.data?.type || 'Node';
                  const isActive = activeNodeId === n.id;
                  
                  return (
                    <div
                      key={n.id}
                      className={`node-bubble ${isActive ? 'active' : ''}`}
                      onClick={() => onNodeClick(n)}
                    >
                      <div className="node-bubble-title">{displayName}</div>
                      <div className="node-bubble-type">{type}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
