import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const response = await client.createCollection();
    console.log(response);
}

main();
