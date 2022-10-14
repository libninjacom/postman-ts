import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const response = await client.serviceProviderConfig();
    console.log(response);
}

main();
