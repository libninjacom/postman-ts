import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const response = await client.fetchAllUserResource();
    console.log(response);
}

main();
