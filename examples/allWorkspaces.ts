import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const response = await client.allWorkspaces();
    console.log(response);
}

main();
