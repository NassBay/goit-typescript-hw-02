let some: unknown;
some = 10;
let str: string;

if (typeof some === 'string') {
    str = some as string;
}

export {};