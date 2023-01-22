import { writable } from 'svelte/store';
import { Card } from '../components/Card';

export const card = writable<Record<string, Card>>(JSON.parse(localStorage.getItem('card') ?? "{}"));

card.subscribe((value) => {
	localStorage.setItem('card', JSON.stringify(value));
});
