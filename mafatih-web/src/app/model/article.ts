import { Item } from './item';

export class Article {
    id: number;
    title?: string;
    href?: string;
    items?: Item[];
}