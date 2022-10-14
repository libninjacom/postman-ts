import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const monitorUid = "1e6b6cc1-c760-48e0-968f-4bfaeeae9af1";
    const response = await client.deleteMonitor(monitorUid);
    console.log(response);
}

main();
