// markup type
export type EMarkup = string;
export type HTMLMarkup = string;
export type ParaId = string; // paragraph identifier
// Text fragment reference
export type NodeImageRef = string; // reference to the image on the server
export interface TextRef { // Define where to insert or replace.
    para?: ParaId;   // Paragraph to which it applies (range limiter)
    after?: string;   // string to search for first (left range limit)
    before?: string;  // string to search for first (right range limit)
    replace?: string; // string to replace inside the range
} // NOTE: it should be an error if TextRef does *not* give unique location within current text.
export type NodeId = string;
export type TermTree = {
    nodeId: string;
    name: string;
    image: NodeImageRef; // this will correspond to icon name in the dictionary
    children: Array<TermTree>;
};

export enum FeedbackType {
    excerpt = 'excerpt',  // snippet to be inserted
    question = 'question', // question with number of text options ('yes' or 'no')
    category = 'category', // question with a selection out of tree or a forest of categories
    pointer = 'pointer',  // pointer from one paragraph to another
}

export interface Feedback {
    ftype: FeedbackType;
}

export interface Excerpt extends Feedback {
    ftype: FeedbackType.excerpt;
    description: HTMLMarkup; // what to show among snippets
    // this was: toString
    ref: string; // URL to explanation
    // this was: toRef
    insert: EMarkup; // inserted snippet
    // this was: toInsert
    where?: TextRef; // Where to insert (otherwise, as new paragraph at the cursor)
    acceptedCallback?: URL; // Callback to the server (without hostname), where to inform about that snippet was accepted (so it can update suggestions list)
    irrelevantCallback?: URL; // Callback to the server (without hostname), where to inform about that snippet was irrelevant (so it can update suggestions list)
    // rejectedCallback   : URL?; // No need to callback upon rejection, since it only grays out the choice for UX, and does not cause update of suggestions list for this fragment
}

export interface Question extends Feedback {
    ftype: FeedbackType.question;
    question: string; // Question text
    where: TextRef; // Where to put the balloon tip (must resolve to a location, put the tip at the beginning of selected range
    answers: Array<Answer>;
}
export type Answer = {
    option: string;  // for example: 'yes' or 'no'
    note: EMarkup; // Text to insert upon answer. for example 'Dog is canine.' or 'Dog is not canine.'
    where?: TextRef; // Where to put the note text
    callback?: URL;     // Callback to the server (without hostname), where to inform about the answer
};
export interface Category extends Feedback {
    ftype: FeedbackType.category;
    where: TextRef; // Which word in the text is to be specified.
    tree: Array<TermTree>; // Tree or forest of possible options
    callback?: URL;     // Callback to the server (without hostname), where to inform about the answer
}
export interface Pointer extends Feedback { // Note: different pointers should have different colors for easier nav
    ftype: FeedbackType.pointer;
    from: TextRef;
    to: TextRef;
    label: string; // Label for the link
    description: HTMLMarkup; // Explanation to be displayed upon mouseover the label
}
// API interface
export interface ResponseType {
    paraId: ParaId;
    excerpts: Array<Feedback>;
}
