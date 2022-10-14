import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const apiId = "387c2863-6ee3-4a56-8210-225f774edade";
    const apiVersionId = "a9879d02-74bf-425a-bbec-6d27aa135507";
    const response = await client.deleteAnApiVersion(apiId, apiVersionId);
    console.log(response);
}

main();
