import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        apiId: "your api id",
        apiVersionId: "your api version id",
        relations: [{}],
        name: "your name",
        schemaId: "your schema id",
        workspaceId: "your workspace id",
    };
    const response = await client.createCollectionFromSchema(args);
    console.log(response);
}

main();
