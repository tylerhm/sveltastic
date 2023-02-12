import { browser } from '$app/environment';
import { type Readable, writable } from 'svelte/store';
import type { Card } from '../types/Card';

const cardsWritable = writable<Record<string, Card>>(
  browser ? JSON.parse(localStorage.getItem('card') ?? '{}') : {}
);

const isSavingWritable = writable(false);
export const isSaving: Readable<boolean> = {
  subscribe: isSavingWritable.subscribe,
};

const removeCard = (uuid: string) => {
  cardsWritable.update((c) => {
    delete c[uuid];
    return c;
  });
};

export const cards = {
  subscribe: cardsWritable.subscribe,
  set: cardsWritable.set,
  removeCard,
};

let firstLoad = true;
let oldTimeout: NodeJS.Timeout;
cards.subscribe((value) => {
  clearTimeout(oldTimeout);
  if (firstLoad) {
    firstLoad = false;
  } else {
    firstLoad = false;
    isSavingWritable.set(true);
    oldTimeout = setTimeout(() => {
      if (browser) {
        localStorage.setItem('card', JSON.stringify(value));
      }
      isSavingWritable.set(false);
    }, 1000);
  }
});
