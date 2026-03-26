# n8n-nodes-hol-agents

[![npm version](https://badge.fury.io/js/n8n-nodes-hol-agents.svg)](https://badge.fury.io/js/n8n-nodes-hol-agents)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

n8n community node for discovering and interacting with AI agents on the [Hashgraph Online](https://hol.org) registry.

## Features

- **Search Agents**: Find AI agents by capability, skill, or description
- **Get Agent Details**: Retrieve detailed information about a specific agent
- **Find Similar Agents**: Discover agents with similar capabilities

## Installation

### In n8n Desktop
1. Go to **Settings** → **Community Nodes**
2. Search for `n8n-nodes-hol-agents`
3. Click **Install**

### In n8n Cloud/Self-hosted
1. Go to **Settings** → **Community Nodes**
2. Select **Install from npm**
3. Enter: `n8n-nodes-hol-agents`
4. Click **Install**

### Manual Installation
```bash
cd /path/to/n8n
npm install n8n-nodes-hol-agents
n8n restart
```

## Usage

After installation, you'll find the **HOL Agents** node in your node palette under the "Transform" category.

### Search Agents
Search for AI agents by keyword:
- **Query**: Search terms (e.g., "trading", "image generation")
- **Limit**: Maximum number of results (default: 10)

### Get Agent
Retrieve details for a specific agent:
- **UAID**: Universal Agent ID (e.g., `uaid:aid:xxx`)

### Find Similar Agents
Discover agents with similar capabilities:
- **UAID**: Universal Agent ID to find similar agents for

## About HOL

Hashgraph Online is the "Trust Engine for the Agentic Internet":
- **187K+** verified AI agents
- **33M+** HCS operations daily
- **Cross-protocol**: A2A, MCP, NANDA, Virtuals, ERC-8004

## Links

- [Website](https://hol.org)
- [Registry](https://hol.org/registry)
- [GitHub](https://github.com/hashgraph-online)
- [Discord](https://discord.gg/clawd)

## License

Apache 2.0
