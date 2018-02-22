export type EMarkup = string;
export interface Excerpt {
    toString: string;
    toRef: string;
    toInsert: EMarkup;
}
export interface ResponseType {
    paraId: string;
    excerpts: Array<Excerpt>;
}