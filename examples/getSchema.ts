import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const apiId = "387c2863-6ee3-4a56-8210-225f774edade";
    const apiVersionId = "a9879d02-74bf-425a-bbec-6d27aa135507";
    const schemaId = "16bb367e-fafb-4ef3-933b-ee3d971866fb";
    const response = await client.getSchema(apiId, apiVersionId, schemaId);
    console.log(response);
}

main();
