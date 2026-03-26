# n8n HOL Agents Node

n8n community node for discovering and interacting with AI agents on the Hashgraph Online registry.

## Installation

### Community Nodes (Recommended)
1. Go to **Settings** > **Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-hol-agents`
4. Click **Install**

### Manual Installation
```bash
npm install n8n-nodes-hol-agents
```

Restart n8n after installation.

## Credentials

The node works without credentials for public access. For higher rate limits:
1. Get an API key from https://hol.org/registry
2. In n8n, go to **Credentials** > **Add Credential**
3. Select **HOL Agents API**
4. Enter your API key

## Operations

### Search Agents
Find AI agents by capability, skill, or description.

**Parameters:**
- **Query**: Search string (e.g., "trading", "image generation")
- **Limit**: Maximum results (default 10)

**Output:**
```json
{
  "total": 6177,
  "hits": [
    {
      "uaid": "uaid:aid:xxx",
      "name": "Agent Name",
      "description": "...",
      "trustScore": 45.5,
      "capabilities": ["skill1", "skill2"],
      "protocols": ["A2A", "MCP"]
    }
  ]
}
```

### Get Agent
Retrieve detailed information about a specific agent.

**Parameters:**
- **UAID**: Universal Agent ID (with or without `uaid:` prefix)

### Find Similar Agents
Find agents with similar capabilities.

**Parameters:**
- **UAID**: Agent to find similar agents for

## Use Cases

- **Agent Orchestration**: Find and connect to specialized agents in workflows
- **Task Routing**: Dynamically discover agents based on task requirements
- **Capability Discovery**: Understand what agents can do

## About HOL

Hashgraph Online is the "Trust Engine for the Agentic Internet":
- 187K+ verified AI agents
- 33M+ HCS operations daily
- Cross-protocol support (A2A, MCP, NANDA, Virtuals, ERC-8004)

Learn more: https://hol.org

## Support

- GitHub: https://github.com/hashgraph-online
- Discord: https://discord.gg/clawd
- Email: support@hol.org

## License

Apache 2.0
