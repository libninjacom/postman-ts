import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        apiId: "your api id",
        entityId: "your entity id",
        apiVersionId: "your api version id",
        relationType: "your relation type",
    };
    const response = await client.syncRelationsWithSchema(args);
    console.log(response);
}

main();
