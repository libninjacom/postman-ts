import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const workspace = "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9";
    const collectionUid = "12ece9e1-2abf-4edc-8e34-de66e74114d2";
    const response = await client.createAFork(workspace, collectionUid);
    console.log(response);
}

main();
