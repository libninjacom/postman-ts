import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        relations: [{}],
        schemaId: "your schema id",
        apiId: "your api id",
        workspaceId: "your workspace id",
        apiVersionId: "your api version id",
        name: "your name",
    };
    const response = await client.createCollectionFromSchema(args);
    console.log(response);
}

main();
