import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class HolAgents implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HOL Agents',
		name: 'holAgents',
		icon: 'file:hol-agents.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Discover and interact with AI agents on the Hashgraph Online registry',
		defaults: {
			name: 'HOL Agents',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'holAgentsApi',
				required: false,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Search Agents',
						value: 'search',
						description: 'Search for AI agents by query',
						action: 'Search for agents',
					},
					{
						name: 'Get Agent',
						value: 'get',
						description: 'Get detailed information about a specific agent',
						action: 'Get agent details',
					},
					{
						name: 'Find Similar Agents',
						value: 'similar',
						description: 'Find agents similar to a given agent',
						action: 'Find similar agents',
					},
				],
				default: 'search',
			},
			// Search parameters
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['search'],
					},
				},
				description: 'Search query to find agents',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 10,
				displayOptions: {
					show: {
						operation: ['search'],
					},
				},
				description: 'Maximum number of results to return',
			},
			// UAID for get/similar
			{
				displayName: 'Agent UAID',
				name: 'uaid',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: ['get', 'similar'],
					},
				},
				description: 'The Universal Agent ID (with or without uaid: prefix)',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		const baseUrl = 'https://hol.org/registry/api/v1';

		// Get optional API key from credentials
		let apiKey = '';
		try {
			const credentials = await this.getCredentials('holAgentsApi');
			apiKey = (credentials.apiKey as string) || '';
		} catch {
			// Credentials are optional
		}

		for (let i = 0; i < items.length; i++) {
			let url = '';

			switch (operation) {
				case 'search': {
					const query = this.getNodeParameter('query', i) as string;
					const limit = this.getNodeParameter('limit', i) as number;
					url = `${baseUrl}/search?q=${encodeURIComponent(query)}&limit=${limit}`;
					break;
				}
				case 'get': {
					let uaid = this.getNodeParameter('uaid', i) as string;
					if (!uaid.startsWith('uaid:')) {
						uaid = `uaid:${uaid}`;
					}
					url = `${baseUrl}/agents/${encodeURIComponent(uaid)}`;
					break;
				}
				case 'similar': {
					let uaid = this.getNodeParameter('uaid', i) as string;
					if (!uaid.startsWith('uaid:')) {
						uaid = `uaid:${uaid}`;
					}
					url = `${baseUrl}/agents/${encodeURIComponent(uaid)}/similar`;
					break;
				}
			}

			const headers: Record<string, string> = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'HOL-n8n-Node/1.0',
			};

			if (apiKey) {
				headers['Authorization'] = `Bearer ${apiKey}`;
			}

			const response = await this.helpers.httpRequest({
				method: 'GET',
				url,
				headers,
				json: true,
			});

			returnData.push({
				json: response,
				pairedItem: { item: i },
			});
		}

		return [returnData];
	}
}
