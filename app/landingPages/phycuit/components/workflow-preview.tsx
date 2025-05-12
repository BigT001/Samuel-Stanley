"use client"

import { cn } from "@/lib/utils"
import styles from "../styles.module.css"

interface Node {
  id: string
  type: "user" | "action" | "task"
  position: { x: number, y: number }
}

interface Connection {
  from: string
  to: string
}

const nodes: Node[] = [
  { id: "user1", type: "user", position: { x: 50, y: 50 } },
  { id: "action1", type: "action", position: { x: 150, y: 50 } },
  { id: "task1", type: "task", position: { x: 250, y: 50 } }
]

const connections: Connection[] = [
  { from: "user1", to: "action1" },
  { from: "action1", to: "task1" }
]

export function WorkflowPreview() {
  return (
    <div className="relative h-48 w-full bg-black/50 rounded-lg overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100">
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from)
          const toNode = nodes.find(n => n.id === connection.to)
          if (!fromNode || !toNode) return null

          return (
            <g key={`connection-${index}`} className="animate-pulse">
              <line
                x1={fromNode.position.x + 20}
                y1={fromNode.position.y + 10}
                x2={toNode.position.x - 20}
                y2={toNode.position.y + 10}
                stroke="rgba(163, 230, 53, 0.3)"
                strokeWidth="2"
                strokeDasharray="4"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="1.5s"
                  values="0,0; 4,0; 0,0"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            transform={`translate(${node.position.x},${node.position.y})`}
            className="animate-pulse"
          >
            <rect
              x="-20"
              y="-10"
              width="40"
              height="40"
              rx="6"
              fill={
                node.type === "user" ? "rgba(236, 72, 153, 0.2)" :
                node.type === "action" ? "rgba(163, 230, 53, 0.2)" :
                "rgba(56, 189, 248, 0.2)"
              }
              stroke={
                node.type === "user" ? "rgb(236, 72, 153)" :
                node.type === "action" ? "rgb(163, 230, 53)" :
                "rgb(56, 189, 248)"
              }
              strokeWidth="1.5"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </svg>

      {/* Glowing effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/5 to-transparent">
        <div className={styles["workflow-glow"]} />
      </div>
    </div>
  )
}
