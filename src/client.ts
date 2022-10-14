import * as model from "./model";

export class PostmanClient {
    authenticator: PostmanAuthentication;
    baseUrl: string;
    constructor(baseUrl: string, authenticator: PostmanAuthentication) {
        this.authenticator = authenticator;
        this.baseUrl = baseUrl;
    }
    static fromEnv(): PostmanClient {
        return new PostmanClient(
            getEnvVar("POSTMAN_BASE_URL"),
            PostmanAuthentication.fromEnv()
        );
    }

    async send(
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        path: string,
        headers: Record<string, string>,
        query: Record<string, string | number | boolean | undefined>,
        body: any
    ): Promise<string> {
        /**
    @throws {HttpError} if the response is not a 2xx response*/
        const params = new URLSearchParams(filter_undefined(query));
        const url = `${this.baseUrl}${path}?` + params.toString();
        const headers1 = { "Content-Type": "application/json", ...headers };
        const res = await fetch(url, {
            method: method,
            headers: filter_undefined(headers1),
            body: ["GET", "HEAD"].includes(method)
                ? undefined
                : JSON.stringify(body),
        });
        const text = await res.text();
        if (res.ok) {
            return text;
        } else {
            throw new HttpError(text, res.status);
        }
    }

    async getAllApis({
        workspace,
        since,
        until,
        createdBy,
        updatedBy,
        isPublic,
        name,
        summary,
        description,
        sort,
        direction,
    }: Partial<{
        workspace: string;
        since: string;
        until: string;
        createdBy: string;
        updatedBy: string;
        isPublic: boolean;
        name: string;
        summary: string;
        description: string;
        sort: string;
        direction: string;
    }> = {}): Promise<any> {
        /**Get all APIs
    
    Gets information about all APIs.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis`;
        const params = {
            workspace: workspace,
            since: since,
            until: until,
            createdBy: createdBy,
            updatedBy: updatedBy,
            isPublic: isPublic,
            name: name,
            summary: summary,
            description: description,
            sort: sort,
            direction: direction,
        };
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createApi({
        workspaceId,
        api,
    }: Partial<{ workspaceId: string; api: any }> = {}): Promise<any> {
        /**Create an API
    
    Creates an API.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { api: api };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleApi(apiId: string): Promise<any> {
        /**Get an API
    
    Gets information about an API.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateAnApi(
        apiId: string,
        { api }: Partial<{ api: any }> = {}
    ): Promise<any> {
        /**Update an API
    
    Updates an API.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}`;
        const params = {};
        const headers = {};
        const body1 = { api: api };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteAnApi(apiId: string): Promise<any> {
        /**Delete an API
    
    Deletes an API.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getAllApiVersions(apiId: string): Promise<any> {
        /**Get all API versions
    
    Gets information about an API's versions.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createApiVersion(
        apiId: string,
        { version }: Partial<{ version: any }> = {}
    ): Promise<any> {
        /**Create an API version
    
    Creates a new API version.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions`;
        const params = {};
        const headers = {};
        const body1 = { version: version };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getAnApiVersion(apiId: string, apiVersionId: string): Promise<any> {
        /**Get an API version
    
    Gets information about an API version.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateAnApiVersion(
        apiId: string,
        apiVersionId: string,
        { version }: Partial<{ version: any }> = {}
    ): Promise<any> {
        /**Update an API version
    
    Updates an API version.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}`;
        const params = {};
        const headers = {};
        const body1 = { version: version };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteAnApiVersion(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Delete an API version
    
    Deletes an API version.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getContractTestRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get contract test relations
    
    This endpoint is **deprecated**. Use the `/apis/{apiId}/versions/{apiVersionId}/test` endpoint.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/contracttest`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getDocumentationRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get documentation relations
    
    Gets an API version's documentation relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/documentation`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getEnvironmentRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get environment relations
    
    Gets an API version's environment relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/environment`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getIntegrationTestRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get integration test relations
    
    This endpoint is **deprecated**. Use the `/apis/{apiId}/versions/{apiVersionId}/test` endpoint.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/integrationtest`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getMockServerRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get mock server relations
    
    Gets an API version's mock server relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/mock`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getMonitorRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get monitor relations
    
    Gets an API version's monitor relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/monitor`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getLinkedRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get all linked relations
    
    Gets all of an API version's relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/relations`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createRelations(
        apiId: string,
        apiVersionId: string,
        {
            documentation,
            environment,
            mock,
            monitor,
            test,
            contracttest,
            testsuite,
        }: Partial<{
            documentation: string[];
            environment: string[];
            mock: string[];
            monitor: string[];
            test: string[];
            contracttest: string[];
            testsuite: string[];
        }> = {}
    ): Promise<any> {
        /**Create relations
    
    Creates a new relation for an API version. This endpoint accepts multiple relation arrays in a single call.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/relations`;
        const params = {};
        const headers = {};
        const body1 = {
            documentation: documentation,
            environment: environment,
            mock: mock,
            monitor: monitor,
            test: test,
            contracttest: contracttest,
            testsuite: testsuite,
        };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createSchema(
        apiId: string,
        apiVersionId: string,
        { schema }: Partial<{ schema: any }> = {}
    ): Promise<any> {
        /**Create a schema
    
    Creates an API definition.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/schemas`;
        const params = {};
        const headers = {};
        const body1 = { schema: schema };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getSchema(
        apiId: string,
        apiVersionId: string,
        schemaId: string
    ): Promise<any> {
        /**Get a schema
    
    Gets information about an API's definition.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/schemas/${schemaId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateSchema(
        apiId: string,
        apiVersionId: string,
        schemaId: string,
        { schema }: Partial<{ schema: any }> = {}
    ): Promise<any> {
        /**Update a schema
    
    Updates an API definition.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/schemas/${schemaId}`;
        const params = {};
        const headers = {};
        const body1 = { schema: schema };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createCollectionFromSchema(
        apiId: string,
        apiVersionId: string,
        schemaId: string,
        name: string,
        relations: any[],
        { workspaceId }: Partial<{ workspaceId: string }> = {}
    ): Promise<any> {
        /**Create collection from a schema
    
    Creates a collection and links it to an API as one or multiple relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/schemas/${schemaId}/collections`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { name: name, relations: relations };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getTestRelations(apiId: string, apiVersionId: string): Promise<any> {
        /**Get all test relations
    
    Gets all of an API version's test relations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/test`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getTestSuiteRelations(
        apiId: string,
        apiVersionId: string
    ): Promise<any> {
        /**Get test suite relations
    
    This endpoint is **deprecated**. Use the `/apis/{apiId}/versions/{apiVersionId}/test` endpoint.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/testsuite`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async syncRelationsWithSchema(
        apiId: string,
        apiVersionId: string,
        relationType: string,
        entityId: string
    ): Promise<any> {
        /**Sync API relations with definition
    
    Syncs an API version's relation with the API's definition.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/apis/${apiId}/versions/${apiVersionId}/${relationType}/${entityId}/syncWithSchema`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async allCollections({
        workspaceId,
    }: Partial<{ workspaceId: string }> = {}): Promise<any> {
        /**Get all collections
    
    Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createCollection({
        workspaceId,
        collection,
    }: Partial<{ workspaceId: string; collection: any }> = {}): Promise<any> {
        /**Create a collection
    
    Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html).
    
    **Note:**
    
    - For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):
      - `info` object — Use the `definitions.info` entry.
      - `item` object — Use the `definitions.items` entry.
    - For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { collection: collection };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createAFork(
        workspace: string,
        collectionUid: string,
        { label }: Partial<{ label: string }> = {}
    ): Promise<any> {
        /**Create a fork
    
    Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections/fork/${collectionUid}`;
        const params = { workspace: workspace };
        const headers = {};
        const body1 = { label: label };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async mergeAFork({
        destination,
        source,
        strategy,
    }: Partial<{
        destination: string;
        source: string;
        strategy: string;
    }> = {}): Promise<any> {
        /**Merge a fork
    
    Merges a forked collection back into its destination collection.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections/merge`;
        const params = {};
        const headers = {};
        const body1 = {
            destination: destination,
            source: source,
            strategy: strategy,
        };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleCollection(collectionUid: string): Promise<any> {
        /**Get a collection
    
    Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections/${collectionUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateCollection(
        collectionUid: string,
        { collection }: Partial<{ collection: any }> = {}
    ): Promise<any> {
        /**Update a collection
    
    Updates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html).
    
    > Use caution when using this endpoint. The system will **replace** the existing collection with the values passed in the request body.
    
    **Note:**
    
    - For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):
      - `info` object — Use the `definitions.info` entry.
      - `item` object — Use the `definitions.items` entry.
    - For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections/${collectionUid}`;
        const params = {};
        const headers = {};
        const body1 = { collection: collection };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteCollection(collectionUid: string): Promise<any> {
        /**Delete a collection
    
    Deletes a collection.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/collections/${collectionUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async allEnvironments({
        workspaceId,
    }: Partial<{ workspaceId: string }> = {}): Promise<any> {
        /**Get all environments
    
    Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/environments`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createEnvironment({
        workspaceId,
        environment,
    }: Partial<{ workspaceId: string; environment: any }> = {}): Promise<any> {
        /**Create an environment
    
    Creates an environment.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/environments`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { environment: environment };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleEnvironment(environmentUid: string): Promise<any> {
        /**Get an environment
    
    Gets information about an environment.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/environments/${environmentUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateEnvironment(
        environmentUid: string,
        { environment }: Partial<{ environment: any }> = {}
    ): Promise<any> {
        /**Update an environment
    
    Updates an environment.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/environments/${environmentUid}`;
        const params = {};
        const headers = {};
        const body1 = { environment: environment };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteEnvironment(environmentUid: string): Promise<any> {
        /**Delete an environment
    
    Deletes an environment.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/environments/${environmentUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async importExportedData(): Promise<any> {
        /**Import an exported Postman data dump file
    
    **This endpoint is deprecated.**
    
    Imports exported Postman data. This endpoint only accepts [export data dump files](https://postman.postman.co/me/export).
    
    For more information, read our [Exporting data dumps](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps) documentation.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/import/exported`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async importExternalApiSpecification(
        body: any,
        { workspaceId }: Partial<{ workspaceId: string }> = {}
    ): Promise<any> {
        /**Import an OpenAPI definition
    
    Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/).
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/import/openapi`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { body: body };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async apiKeyOwner(): Promise<any> {
        /**Get authenticated user
    
    Gets information about the authenticated user.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/me`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async allMocks(): Promise<any> {
        /**Get all mock servers
    
    Gets all mock servers.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createMock({
        workspaceId,
        mock,
    }: Partial<{ workspaceId: string; mock: any }> = {}): Promise<any> {
        /**Create a mock server
    
    Creates a mock server in a collection.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { mock: mock };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleMock(mockUid: string): Promise<any> {
        /**Get a mock server
    
    Gets information about a mock server.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks/${mockUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateMock(
        mockUid: string,
        { mock }: Partial<{ mock: any }> = {}
    ): Promise<any> {
        /**Update a mock server
    
    Updates a mock server.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks/${mockUid}`;
        const params = {};
        const headers = {};
        const body1 = { mock: mock };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteMock(mockUid: string): Promise<any> {
        /**Delete a mock server
    
    Deletes a mock server.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks/${mockUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async publishMock(mockUid: string): Promise<any> {
        /**Publish a mock server
    
    Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting to public.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks/${mockUid}/publish`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async unpublishMock(mockUid: string): Promise<any> {
        /**Unpublish a mock server
    
    Unpublishes a mock server. Unpublishing a mock server sets its **Access Control** configuration setting to private.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/mocks/${mockUid}/unpublish`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async allMonitors(): Promise<any> {
        /**Get all monitors
    
    Gets all monitors.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createMonitor({
        workspaceId,
        monitor,
    }: Partial<{ workspaceId: string; monitor: any }> = {}): Promise<any> {
        /**Create a monitor
    
    Creates a monitor.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { monitor: monitor };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleMonitor(monitorUid: string): Promise<any> {
        /**Get a monitor
    
    Gets information about a monitor.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors/${monitorUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateMonitor(
        monitorUid: string,
        { monitor }: Partial<{ monitor: any }> = {}
    ): Promise<any> {
        /**Update a monitor
    
    Updates a monitor.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors/${monitorUid}`;
        const params = {};
        const headers = {};
        const body1 = { monitor: monitor };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteMonitor(monitorUid: string): Promise<any> {
        /**Delete a monitor
    
    Deletes a monitor.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors/${monitorUid}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async runAMonitor(monitorUid: string): Promise<any> {
        /**Run a monitor
    
    Runs a monitor and returns its run results.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/monitors/${monitorUid}/run`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async getResourceTypes(): Promise<any[]> {
        /**Get resource types
    
    Gets all the resource types supported by Postman's SCIM API.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/ResourceTypes`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async serviceProviderConfig(): Promise<any> {
        /**Get service provider configuration
    
    Gets the Postman SCIM API configuration information. This includes a list of supported operations.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/ServiceProviderConfig`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async fetchAllUserResource({
        startIndex,
        count,
        filter,
    }: Partial<{
        startIndex: number;
        count: number;
        filter: string;
    }> = {}): Promise<any> {
        /**Get all user resources
    
    Gets information about all Postman team members.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/Users`;
        const params = { startIndex: startIndex, count: count, filter: filter };
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createUser({
        schemas,
        userName,
        active,
        externalId,
        groups,
        locale,
        name,
    }: Partial<{
        schemas: string[];
        userName: string;
        active: boolean;
        externalId: string;
        groups: string[];
        locale: string;
        name: any;
    }> = {}): Promise<any> {
        /**Create a user
    
    Creates a new user account in Postman and adds the user to your organization's Postman team. If the account does not already exist, this also activates the user so they can authenticate in to your Postman team.
    
    If the account already exists, the system sends the user an [email invite](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#inviting-users) to join the Postman team. The user joins the team once they accept the invite.
    
    By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/Users`;
        const params = {};
        const headers = {};
        const body1 = {
            schemas: schemas,
            userName: userName,
            active: active,
            externalId: externalId,
            groups: groups,
            locale: locale,
            name: name,
        };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async fetchUserResource(userId: string): Promise<any> {
        /**Get user resource
    
    Gets information about a Postman team member.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/Users/${userId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateUserInformation(
        userId: string,
        { schemas, name }: Partial<{ schemas: string[]; name: any }> = {}
    ): Promise<any> {
        /**Update a user
    
    Updates a user's first and last name in Postman.
    
    **Note:**
    
    You can only use the SCIM API to update a user's first and last name. You cannot update any other user attributes with the API.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/Users/${userId}`;
        const params = {};
        const headers = {};
        const body1 = { schemas: schemas, name: name };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateUserState(
        userId: string,
        {
            schemas,
            operations,
        }: Partial<{ schemas: string[]; operations: any[] }> = {}
    ): Promise<any> {
        /**Update a user's state
    
    Updates a user's active state in Postman.
    
    ### Reactivating users
    
    By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/scim/v2/Users/${userId}`;
        const params = {};
        const headers = {};
        const body1 = { schemas: schemas, Operations: operations };
        const text = await this.send("PATCH", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async schemaSecurityValidation({
        schema,
    }: Partial<{ schema: any }> = {}): Promise<any> {
        /**Schema security validation
    
    Performs a security analysis on the given definition and returns any issues. This can help you understand their impact and provides solutions to help you resolve the errors. You can include this endpoint to your CI/CD process to automate schema validation.
    
    For more information, read our [API definition warnings](https://learning.postman-beta.com/docs/api-governance/api-definition/api-definition-warnings/) documentation.
    
    **Note:**
    
    The maximum allowed size of the definition is 10 MB.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/security/api-validation`;
        const params = {};
        const headers = {};
        const body1 = { schema: schema };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createWebhook({
        workspaceId,
        webhook,
    }: Partial<{ workspaceId: string; webhook: any }> = {}): Promise<any> {
        /**Create a webhook
    
    Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response.
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/webhooks`;
        const params = { workspaceId: workspaceId };
        const headers = {};
        const body1 = { webhook: webhook };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async allWorkspaces({
        type,
    }: Partial<{ type: string }> = {}): Promise<any> {
        /**Get all workspaces
    
    Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to.
    
    **Note:**
    
    This endpoint's response contains the visibility field. Visibility determines who can access the workspace:
    
    - `only-me` — Applies to the **My Workspace** workspace.
    - `personal` — Only you can access the workspace.
    - `team` — All team members can access the workspace.
    - `private-team` — Only invited team members can access the workspace.
    - `public` — Everyone can access the workspace.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/workspaces`;
        const params = { type: type };
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async createWorkspace({
        workspace,
    }: Partial<{ workspace: any }> = {}): Promise<any> {
        /**Create a workspace
    
    Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).
    
    ### Important:
    
    We **deprecated** linking collections or environments between workspaces. We do **not** recommend that you do this.
    
    If you have a linked collection or environment, note the following:
    
    - The endpoint does **not** create a clone of a collection or environment.
    - Any changes you make to a linked collection or environment changes them in **all** workspaces.
    - If you delete a collection or environment linked between workspaces, the system deletes it in **all** the workspaces.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/workspaces`;
        const params = {};
        const headers = {};
        const body1 = { workspace: workspace };
        const text = await this.send("POST", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async singleWorkspace(workspaceId: string): Promise<any> {
        /**Get a workspace
    
    Gets information about a workspace.
    
    **Note:**
    
    This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
    
    - `only-me` — Applies to the **My Workspace** workspace.
    - `personal` — Only you can access the workspace.
    - `team` — All team members can access the workspace.
    - `private-team` — Only invited team members can access the workspace.
    - `public` — Everyone can access the workspace.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/workspaces/${workspaceId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("GET", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async updateWorkspace(
        workspaceId: string,
        { workspace }: Partial<{ workspace: any }> = {}
    ): Promise<any> {
        /**Update a workspace
    
    Updates a workspace.
    
    **Note:**
    
    You can change a workspace's type from `personal` to `team`, but you **cannot** change a workspace from `team` to `personal`.
    
    ### Important:
    
    We **deprecated** linking collections or environments between workspaces. We do **not** recommend that you do this.
    
    If you have a linked collection or environment, note the following:
    
    - The endpoint does **not** create a clone of a collection or environment.
    - Any changes you make to a linked collection or environment changes them in **all** workspaces.
    - If you delete a collection or environment linked between workspaces, the system deletes it in **all** the workspaces.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/workspaces/${workspaceId}`;
        const params = {};
        const headers = {};
        const body1 = { workspace: workspace };
        const text = await this.send("PUT", path1, headers, params, body1);
        return JSON.parse(text);
    }

    async deleteWorkspace(workspaceId: string): Promise<any> {
        /**Delete a workspace
    
    Deletes an existing workspace.
    
    ### Important:
    
    If you delete a workspace that has a linked collection or environment with another workspace, this will delete the collection and environment in **all** workspaces.
    
    
    @throws {SyntaxError} if a valid 2xx response is not valid JSON
    @throws {HttpError} if the response is not a 2xx response*/
        const path1 = `/workspaces/${workspaceId}`;
        const params = {};
        const headers = {};
        const body1 = {};
        const text = await this.send("DELETE", path1, headers, params, body1);
        return JSON.parse(text);
    }
}

class PostmanAuthentication {
    static fromEnv(): PostmanAuthentication {
        return new PostmanAuthentication();
    }
}

function getEnvVar(name: string): string {
    const value = process.env[name];
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
}

export class HttpError extends Error {
    status: number;

    constructor(response: string, status: number) {
        super(response);
        this.status = status;
    }
}

function filter_undefined(
    obj: Record<string, string | number | boolean | undefined>
): Record<string, string> {
    const entries = Object.entries(obj)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => [k, v!.toString()]);
    return Object.fromEntries(entries);
}
