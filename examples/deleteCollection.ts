import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const collectionUid = "12ece9e1-2abf-4edc-8e34-de66e74114d2";
    const response = await client.deleteCollection(collectionUid);
    console.log(response);
}

main();
