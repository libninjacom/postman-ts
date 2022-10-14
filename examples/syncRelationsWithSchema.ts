import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        entityId: "your entity id",
        relationType: "your relation type",
        apiId: "your api id",
        apiVersionId: "your api version id",
    };
    const response = await client.syncRelationsWithSchema(args);
    console.log(response);
}

main();
