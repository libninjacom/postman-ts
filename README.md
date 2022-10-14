<div id="top"></div>

<p align="center">
    <a href="https://github.com/libninjacom/postman-ts/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/libninjacom/postman-ts.svg?style=flat-square" alt="GitHub Contributors" />
    </a>
    <a href="https://github.com/libninjacom/postman-ts/stargazers">
        <img src="https://img.shields.io/github/stars/libninjacom/postman-ts.svg?style=flat-square" alt="Stars" />
    </a>
    <a href="https://github.com/libninjacom/postman-ts/actions">
        <img src="https://img.shields.io/github/workflow/status/libninjacom/postman-ts/CI?style=flat-square" alt="Build Status" />
    </a>
    


</p>

Postman client, generated from the OpenAPI spec.

# Usage

```typescript
import {PostmanClient} from "postman"

async function main() {
    const client = PostmanClient.fromEnv()
    const response = await client.getAllApis()
    console.log(response)
}

main()
```

This example loads configuration from environment variables, specifically:

* `POSTMAN_API_KEY`





# Documentation


* [API Documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a)



You can see working examples of every API call in the `examples/` directory.

# Contributing

Contributions are welcome!

*Library created with [Libninja](https://www.libninja.com).*