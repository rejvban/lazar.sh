import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypePostFields {
    slug?: Contentful.EntryFields.Symbol;
    title?: Contentful.EntryFields.Symbol;
    subject?: Contentful.EntryFields.Symbol[];
    publishedAt?: Contentful.EntryFields.Date;
    content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    summary?: Contentful.EntryFields.Text;
}

export type TypePost = Contentful.Entry<TypePostFields>;
