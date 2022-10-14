import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const apiId = "387c2863-6ee3-4a56-8210-225f774edade";
    const response = await client.updateAnApi(apiId);
    console.log(response);
}

main();
