import { PostmanClient } from "postman";

async function main() {
    const client = PostmanClient.fromEnv();
    const userId = "405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99";
    const response = await client.updateUserInformation(userId);
    console.log(response);
}

main();
