// markup type
export type EMarkup = string;

// search item type
export type Excerpt = {
    toString: string;
    toRef: string;
    toInsert: EMarkup;
};
// api interface
export interface ResponseType {
    paraId: string;
    excerpts: Array<Excerpt>;
}