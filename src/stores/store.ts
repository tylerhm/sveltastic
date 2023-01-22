import { Readable, writable } from 'svelte/store';
import { Card } from '../components/Card';

const cardsWritable = writable<Record<string, Card>>(JSON.parse(localStorage.getItem('card') ?? "{}"));

const isSavingWritable = writable(false);
export const isSaving: Readable<boolean> = { subscribe: isSavingWritable.subscribe };

const removeCard = (uuid: string) => {
	cardsWritable.update((c) => {
		delete c[uuid];
		return c;
	});
};

export const cards = { subscribe: cardsWritable.subscribe, removeCard };

let oldTimeout: NodeJS.Timeout;
cards.subscribe((value) => {
	clearTimeout(oldTimeout);
	isSavingWritable.set(true);
	oldTimeout = setTimeout(() => {
		localStorage.setItem('card', JSON.stringify(value));
		isSavingWritable.set(false);
	}, 1000);
});
