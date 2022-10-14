import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        schemaId: "your schema id",
        apiId: "your api id",
        apiVersionId: "your api version id",
        workspaceId: "your workspace id",
        name: "your name",
        relations: [{}],
    };
    const response = await client.createCollectionFromSchema(args);
    console.log(response);
}

main();
