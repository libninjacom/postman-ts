import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const mockUid = "e3d951bf-873f-49ac-a658-b2dcb91d3289";
    const response = await client.deleteMock(mockUid);
    console.log(response);
}

main();
