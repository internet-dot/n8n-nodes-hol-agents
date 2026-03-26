import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HolAgentsApi implements ICredentialType {
	name = 'holAgentsApi';
	displayName = 'HOL Agents API';
	documentationUrl = 'https://hol.org/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Optional HOL Registry API key for higher rate limits. Leave empty for public access.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://hol.org/registry/api/v1',
			url: '/search?limit=1',
		},
	};
}
