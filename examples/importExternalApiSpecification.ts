import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const body = {};
    const response = await client.importExternalApiSpecification(body);
    console.log(response);
}

main();
