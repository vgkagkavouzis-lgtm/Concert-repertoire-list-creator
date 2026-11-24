import { type ChangeEvent } from "react";

export type InputIdentifier = 'title' | 'keySignature' ;

export type InputProps = {
    id: string;
    labelText: string;
    value: string;
    changeFunction: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
}

export type FormValues = {
    title: string;
    keySignature: string;
}

export type Song = FormValues;