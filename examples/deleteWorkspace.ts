import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const workspaceId = "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9";
    const response = await client.deleteWorkspace(workspaceId);
    console.log(response);
}

main();
