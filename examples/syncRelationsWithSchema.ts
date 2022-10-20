import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        relationType: "your relation type",
        entityId: "your entity id",
        apiVersionId: "your api version id",
        apiId: "your api id",
    };
    const response = await client.syncRelationsWithSchema(args);
    console.log(response);
}

main();
