# Client API (version 1) <br/> Microfrontends Microservices Client SDK for Node.js

Node.js client API for Microfrontends microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [MicrofrontendV1 class](#class1)
* [IMicrofrontendClientV1 interface](#interface)
    - [getMicrofrontends()](#operation1)
    - [getRandomMicrofrontend()](#operation2)
    - [getMicrofrontendById()](#operation3)
    - [createMicrofrontend()](#operation4)
    - [updateMicrofrontend()](#operation5)
    - [deleteMicrofrontendById()](#operation6)
* [MicrofrontendsDirectClientV1 class](#client_direct)
* [MicrofrontendsHttpClientV1 class](#client_http)
* [MicrofrontendsSenecaClientV1 class](#client_seneca)
* [MicrofrontendsLambdaClientV1 class](#client_lambda)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-microfrontends-node": "^1.1.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-microfrontends-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
let client = sdk.MicrofrontendsHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);

console.log('Opened connection');
  
// Create a new microfrontend
let microfrontend = {
    text: { en: 'Get in hurry slowly' },
    author: { en: 'Russian proverb' },
    tags: ['time management'],
    status: 'completed'
};  

let microfrontend = await client.createMicrofrontend(null, microfrontend);
    
console.log('Create microfrontend is');
console.log(microfrontend);

// Get the list of microfrontends on 'time management' topic
let page = await client.getMicrofrontends(
  {
      tags: 'time management',
      status: 'completed'
  },
  {
      paging: true,
      skip: 0,
      take: 10
  }
);

console.log('Microfrontends on time management are');
console.log(page.data);
                    
// Close connection
client.close(correlationId, ); 
```

### <a name="class1"></a> MicrofrontendV1 class

Represents an inspirational microfrontend

**Properties:**
- id: string - unique microfrontend id
- text: MultiString - microfrontend text in different languages
- author: MultiString - name of the microfrontend author in different languages
- status: string - editing status of the microfrontend: 'new', 'writing', 'translating', 'completed' (default: 'new')
- tags: string[] - (optional) search tags that represent topics associated with the microfrontend
- all_tags: string[] - (read only) explicit and hash tags in normalized format for searching  

## <a name="interface"></a> IMicrofrontendsClientV1 interface

If you are using Typescript, you can use IMicrofrontendsClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IMicrofrontendsClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IMicrofrontendsClientV1 {
    getMicrofrontends(correlationId, filter, paging);
    getRandomMicrofrontend(correlationId, filter);
    getMicrofrontendById(correlationId, microfrontendId);
    createMicrofrontend(correlationId, microfrontend);
    updateMicrofrontend(correlationId, microfrontend);
    deleteMicrofrontendById(correlationId, microfrontendId);
}
```

### <a name="operation1"></a> getMicrofrontends(correlationId, filter, paging)

Retrieves a collection of microfrontends according to specified criteria

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) microfrontend editing status
  - author: string - (optional) author name in any language 
  - except_ids: string[] - (optional) microfrontend ids to exclude 
- paging: any - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
  - paging: bool - (optional) true to enable paging and return total count
- return: Promise<DataPage<MicrofrontendV1>> - retrieved microfrontends in page format

### <a name="operation2"></a> getRandomMicrofrontend(correlationId, filter, callback)

Retrieves a random microfrontend from filtered resultset

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) microfrontend editing status
  - author: string - (optional) author name in any language
  - except_ids: string[] - (optional) microfrontend ids to exclude 
- return: Promise<MicrofrontendV1> - random microfrontend, null if object wasn't found 

### <a name="operation3"></a> getMicrofrontendById(correlationId, microfrontendId)

Retrieves a single microfrontend specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- microfrontendId: string - unique Microfrontend id
- return: Promise<MicrofrontendV1> - retrieved microfrontend, null if object wasn't found 

### <a name="operation4"></a> createMicrofrontend(correlationId, microfrontend)

Creates a new microfrontend

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- microfrontend: MicrofrontendV1 - Microfrontend object to be created. If object id is not defined it is assigned automatically.
- return: Promise<MicrofrontendV1> - created microfrontend object

### <a name="operation5"></a> updateMicrofrontend(correlationId, microfrontend)

Updates microfrontend specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- microfrontend: MicrofrontendV1 - microfrontend object with new values. Partial updates are supported
- return: Promise<MicrofrontendV1> - updated microfrontend object 

### <a name="operation6"></a> deleteMicrofrontendById(correlationId, microfrontendId)

Deletes microfrontend specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- microfrontendId: string - unique microfrontend id
 
## <a name="client_direct"></a> MicrofrontendsDirectClientV1 class

MicrofrontendsDirectClientV1 is a direct client to call controller inside microservice container

```javascript
class MicrofrontendsDirectClientV1 extends DirectClient implements IMicrofrontendsClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getMicrofrontends(correlationId, filter, paging);
    getRandomMicrofrontend(correlationId, filter);
    getMicrofrontendById(correlationId, microfrontendId);
    createMicrofrontend(correlationId, microfrontend);
    updateMicrofrontend(correlationId, microfrontendId, microfrontend);
    deleteMicrofrontendById(correlationId, microfrontendId);
}
```

**Constructor config properties:** 
- ...

## <a name="client_http"></a> MicrofrontendsHttpClientV1 class

MicrofrontendsHttpClientV1 is a client that implements HTTP protocol

```javascript
class MicrofrontendsHttpClientV1 extends CommandableHttpClient implements IMicrofrontendsClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getMicrofrontends(correlationId, filter, paging);
    getRandomMicrofrontend(correlationId, filter);
    getMicrofrontendById(correlationId, microfrontendId);
    createMicrofrontend(correlationId, microfrontend);
    updateMicrofrontend(correlationId, microfrontend);
    deleteMicrofrontendById(correlationId, microfrontendId);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> MicrofrontendsSenecaClientV1 class

MicrofrontendsSenecaClientV1 is a client that implements Seneca protocol

```javascript
class MicrofrontendsSenecaClientV1 extends SenecaClient implements IMicrofrontendsClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getMicrofrontends(correlationId, filter, paging);
    getRandomMicrofrontend(correlationId, filter);
    getMicrofrontendById(correlationId, microfrontendId);
    createMicrofrontend(correlationId, microfrontend);
    updateMicrofrontend(correlationId, microfrontend);
    deleteMicrofrontendById(correlationId, microfrontendId);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - protocol: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_lambda"></a> MicrofrontendsLambdaClientV1 class

MicrofrontendsLambdaClientV1 is a client that calls AWS Lamba functions

```javascript
class MicrofrontendsLambdaClientV1 extends LambdaClient implements IMicrofrontendsClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getMicrofrontends(correlationId, filter, paging);
    getRandomMicrofrontend(correlationId, filter);
    getMicrofrontendById(correlationId, microfrontendId);
    createMicrofrontend(correlationId, microfrontend);
    updateMicrofrontend(correlationId, microfrontend);
    deleteMicrofrontendById(correlationId, microfrontendId);
}
```

**Constructor config properties:** 
- connection: object - AWS Lambda connection properties
  - protocol: "aws"
  - region: string - AWS availability region like "us-east-1"
  - function: string - unique function name or arn like "arn:aws:lambda:us-east-1:268549927901:function:pip-services-template-node"
- credential: object - AWS Lambda access keys and additional parameters
  - access\_key\_id: string - AWS access key id
  - secret\_access\_key: string - AWS secret access key
- options: object
  - timeout: number - communication timeout in milliseconds (default: 30,000)
  