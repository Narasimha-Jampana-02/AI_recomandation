import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { GraphNode, GraphEdge } from '../types';

interface Props {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Fixed positions for known clusters (normalized 0–1 space)
const CLUSTER_POSITIONS: Record<string, { x: number; y: number }> = {
  software_engineering: { x: 0.5, y: 0.5 },   // center (primary)
  programming: { x: 0.22, y: 0.32 },
  problem_solving: { x: 0.22, y: 0.68 },
  developer_tools: { x: 0.75, y: 0.28 },
  system_design: { x: 0.78, y: 0.68 },
  hardware: { x: 0.5, y: 0.13 },
  ai: { x: 0.5, y: 0.87 },
  gaming: { x: 0.15, y: 0.5 },
  hype: { x: 0.85, y: 0.5 },
};

const CLUSTER_COLORS: Record<string, string> = {
  software_engineering: '#3b82f6',
  programming: '#f59e0b',
  problem_solving: '#8b5cf6',
  developer_tools: '#10b981',
  system_design: '#f97316',
  hardware: '#06b6d4',
  ai: '#ec4899',
  gaming: '#64748b',
  hype: '#ef4444',
};

export default function InterestGraph({ nodes, edges }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 600, h: 400 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (svgRef.current) {
        const rect = svgRef.current.parentElement!.getBoundingClientRect();
        setDims({ w: rect.width, h: Math.min(rect.width * 0.65, 420) });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (nodes.length === 0) return null;

  const pad = 60;
  const W = dims.w;
  const H = dims.h;

  const getPos = (nodeId: string) => {
    const p = CLUSTER_POSITIONS[nodeId] ?? { x: 0.5, y: 0.5 };
    return {
      x: pad + p.x * (W - 2 * pad),
      y: pad + p.y * (H - 2 * pad),
    };
  };

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="w-full relative">
      <svg
        ref={svgRef}
        width="100%"
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="overflow-visible"
      >
        <defs>
          {nodes.map((node) => {
            const color = CLUSTER_COLORS[node.id] ?? '#6366f1';
            return (
              <radialGradient key={`grad-${node.id}`} id={`grad-${node.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={color} stopOpacity="0.05" />
              </radialGradient>
            );
          })}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge) => {
          const src = getPos(edge.source);
          const tgt = getPos(edge.target);
          const srcNode = nodeMap[edge.source];
          const tgtNode = nodeMap[edge.target];
          if (!srcNode || !tgtNode) return null;

          const color = CLUSTER_COLORS[edge.source] ?? '#6366f1';
          const opacity = 0.1 + edge.strength * 0.35;

          return (
            <motion.line
              key={`${edge.source}-${edge.target}`}
              x1={src.x}
              y1={src.y}
              x2={tgt.x}
              y2={tgt.y}
              stroke={color}
              strokeWidth={1 + edge.strength * 2}
              initial={{ strokeOpacity: 0 }}
              animate={{ strokeOpacity: opacity }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const pos = getPos(node.id);
          const color = CLUSTER_COLORS[node.id] ?? '#6366f1';
          const radius = node.is_primary
            ? 38
            : 18 + node.score * 18;
          const isHovered = hoveredNode === node.id;
          const label = node.label;

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2 + i * 0.12,
              }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Glow halo for primary */}
              {node.is_primary && (
                <>
                  <circle cx={pos.x} cy={pos.y} r={radius + 16} fill={`url(#grad-${node.id})`} />
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={radius + 8}
                    fill="none"
                    stroke={color}
                    strokeWidth={1}
                    strokeOpacity={0.3}
                    animate={{ r: [radius + 8, radius + 18, radius + 8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </>
              )}

              {/* Main circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? radius + 3 : radius}
                fill={node.is_primary ? color : `${color}28`}
                stroke={color}
                strokeWidth={node.is_primary ? 2.5 : 1.5}
                strokeOpacity={node.is_primary ? 0.8 : 0.5}
                style={{ transition: 'r 0.2s ease' }}
              />

              {/* Score arc */}
              {!node.is_primary && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={radius - 4}
                  fill="none"
                  stroke={color}
                  strokeWidth={3}
                  strokeOpacity={0.4}
                  strokeDasharray={`${node.score * 2 * Math.PI * (radius - 4)} ${2 * Math.PI * (radius - 4)}`}
                  strokeLinecap="round"
                  style={{ transform: `rotate(-90deg)`, transformOrigin: `${pos.x}px ${pos.y}px` }}
                />
              )}

              {/* Label */}
              <text
                x={pos.x}
                y={node.is_primary ? pos.y - 2 : pos.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.is_primary ? 'white' : color}
                fontSize={node.is_primary ? 11 : 9}
                fontWeight={node.is_primary ? '800' : '600'}
                fontFamily="Inter, sans-serif"
                style={{ userSelect: 'none' }}
              >
                {label.split(' ').map((word, wi) => (
                  <tspan
                    key={wi}
                    x={pos.x}
                    dy={wi === 0 ? (label.includes(' ') ? -6 : 0) : 13}
                  >
                    {word}
                  </tspan>
                ))}
              </text>

              {/* Score badge for primary */}
              {node.is_primary && (
                <text
                  x={pos.x}
                  y={pos.y + radius - 10}
                  textAnchor="middle"
                  fill={color}
                  fontSize={9}
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  fillOpacity={0.8}
                >
                  {Math.round(node.score * 100)}%
                </text>
              )}

              {/* Hover tooltip */}
              {isHovered && !node.is_primary && (
                <g>
                  <rect
                    x={pos.x - 45}
                    y={pos.y - radius - 30}
                    width={90}
                    height={22}
                    rx={6}
                    fill="#1e2030"
                    stroke={color}
                    strokeWidth={1}
                    strokeOpacity={0.5}
                  />
                  <text
                    x={pos.x}
                    y={pos.y - radius - 15}
                    textAnchor="middle"
                    fill={color}
                    fontSize={9}
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    Score: {Math.round(node.score * 100)}%
                  </text>
                </g>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// Helper to get position (exported for potential use)
function _pos(nodeId: string, W: number, H: number, pad: number) {
  const p = CLUSTER_POSITIONS[nodeId] ?? { x: 0.5, y: 0.5 };
  return {
    x: pad + p.x * (W - 2 * pad),
    y: pad + p.y * (H - 2 * pad),
  };
}
void _pos;
