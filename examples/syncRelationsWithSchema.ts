import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const args = {
        apiId: "your api id",
        apiVersionId: "your api version id",
        relationType: "your relation type",
        entityId: "your entity id",
    };
    const response = await client.syncRelationsWithSchema(args);
    console.log(response);
}

main();
