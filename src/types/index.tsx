export type EMarkup = string;
export interface ResponseType {
    toString: string;
    score: number;
    toRef: string;
    toInsert: EMarkup;
}