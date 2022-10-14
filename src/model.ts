export interface scimUserResource {
    schemas: string[];
    id: string;
    userName: string;
    name: any;
    externalId: string;
    active: boolean;
    meta: any;
}

export interface importExportFile {
    type: string;
    input: string;
}

export interface jsonSchema {
    type: string;
    input: any;
}

export interface jsonStringified {
    type: string;
    input: string;
}
