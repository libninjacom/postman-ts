import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const environmentUid = "5daabc50-8451-43f6-922d-96b403b4f28e";
    const response = await client.singleEnvironment(environmentUid);
    console.log(response);
}

main();
