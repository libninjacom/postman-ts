import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        apiVersionId: "your api version id",
        name: "your name",
        apiId: "your api id",
        schemaId: "your schema id",
        relations: [{}],
        workspaceId: "your workspace id",
    };
    const response = await client.createCollectionFromSchema(args);
    console.log(response);
}

main();
