export type favPokeArrType= [number, string][]

export interface IFavsCollection {
    [key: number]: string;
}

export const isFavCollection = (inputObj: unknown): inputObj is IFavsCollection => {
    if (typeof inputObj !== "object") return false;
    if (inputObj === null) return false;
    const inputEntries = Object.entries(inputObj);
    for (let i = 0; i < inputEntries.length; i++) {
        const [key] = inputEntries[i];
        const regexNumber = /^\d+$/;
        if (!(regexNumber.test(key))) return false;
    }
    return true;
}