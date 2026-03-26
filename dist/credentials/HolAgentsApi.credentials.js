"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolAgentsApi = void 0;
class HolAgentsApi {
    name = 'holAgentsApi';
    displayName = 'HOL Agents API';
    documentationUrl = 'https://hol.org/docs';
    properties = [
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
    authenticate = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '=Bearer {{$credentials.apiKey}}',
            },
        },
    };
    test = {
        request: {
            baseURL: 'https://hol.org/registry/api/v1',
            url: '/search?limit=1',
        },
    };
}
exports.HolAgentsApi = HolAgentsApi;
//# sourceMappingURL=HolAgentsApi.credentials.js.map