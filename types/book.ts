export interface BooksResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Book[];
}

export interface Book {
    id:             number;
    title:          string;
    authors:        Author[];
    summaries:      string[];
    editors:        Author[];
    translators:    Author[];
    subjects:       string[];
    bookshelves:    string[];
    languages:      Language[];
    copyright:      boolean;
    media_type:     MediaType;
    formats:        Formats;
    download_count: number;
}

export interface Author {
    name:       string;
    birth_year: number | null;
    death_year: number | null;
}

export interface Formats {
    "text/html":                      string;
    "application/epub+zip":           string;
    "application/x-mobipocket-ebook": string;
    "text/plain; charset=us-ascii":   string;
    "application/rdf+xml":            string;
    "image/jpeg":                     string;
    "application/octet-stream":       string;
    "text/html; charset=utf-8"?:      string;
    "text/plain; charset=utf-8"?:     string;
}

export enum Language {
    En = "en",
    Es = "es"
}

export enum MediaType {
    Text = "Text",
}
