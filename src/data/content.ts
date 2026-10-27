export type Category = 'Castle' | 'Food' | 'Landmark' | 'Culture';

export interface Item {
  slug: string;
  name: string;
  caption: string;
  alt: string;
  category?: Category;
}

export const places: Item[] = [
  { slug: 'hill-of-crosses', name: 'Hill of Crosses', category: 'Landmark',
    caption: 'A hill near Šiauliai covered with thousands of crosses left by visitors.',
    alt: 'A small hill crowded with thousands of wooden and metal crosses under a blue sky' },
  { slug: 'vilnius-cathedral', name: 'Vilnius Cathedral', category: 'Landmark',
    caption: 'The main church of Lithuania, in the heart of the capital.',
    alt: 'White columned cathedral with a tall bell tower on a wide square' },
  { slug: 'old-town', name: 'Vilnius Old Town', category: 'Landmark',
    caption: 'The historic center of the capital, a UNESCO World Heritage Site.',
    alt: 'Red rooftops and church towers of Vilnius Old Town' },
  { slug: 'curonian-spit', name: 'Curonian Spit', category: 'Landmark',
    caption: 'Huge sand dunes on a thin strip of land between the sea and a lagoon. A UNESCO site.',
    alt: 'Tall golden sand dunes next to blue water near Nida' },
  { slug: 'kernave', name: 'Kernavė Hill Forts', category: 'Landmark',
    caption: 'Grassy hills where wooden castles once stood. A UNESCO site.',
    alt: 'Round grassy hills rising above a river valley' },
];

export const castles: Item[] = [
  { slug: 'trakai', name: 'Trakai Island Castle', category: 'Castle',
    caption: 'A red brick castle on an island in Lake Galvė.',
    alt: 'Red brick castle with towers on an island, reflected in a lake' },
  { slug: 'gediminas', name: 'Gediminas Tower', category: 'Castle',
    caption: 'A red brick tower on a hill in Vilnius, flying the national flag.',
    alt: 'Red brick tower on a green hill with the Lithuanian flag on top' },
  { slug: 'kaunas-castle', name: 'Kaunas Castle', category: 'Castle',
    caption: 'One of the oldest castles in Lithuania, in its second-largest city.',
    alt: 'Round red brick castle tower with a pointed roof' },
];

export const food: Item[] = [
  { slug: 'cepelinai', name: 'Cepelinai', category: 'Food',
    caption: 'Big potato dumplings filled with meat, the national dish. Named after zeppelin airships.',
    alt: 'Two large oval potato dumplings topped with sour cream and bacon' },
  { slug: 'saltibarsciai', name: 'Šaltibarščiai', category: 'Food',
    caption: 'A cold, bright pink soup made from beets and kefir. A summer favorite.',
    alt: 'A bowl of bright pink cold beet soup with egg and dill' },
  { slug: 'sakotis', name: 'Šakotis', category: 'Food',
    caption: 'A "tree cake" baked layer by layer over a fire, with spikes like branches.',
    alt: 'A tall golden cake covered in spiky branches' },
];

export const culture: Item[] = [
  { slug: 'amber', name: 'Amber', category: 'Culture',
    caption: 'Fossilized tree resin found on the Baltic coast, called "Lithuanian gold".',
    alt: 'A pile of polished golden-orange amber stones' },
  { slug: 'costume', name: 'Traditional Costume', category: 'Culture',
    caption: 'Striped skirts, aprons, and woven sashes. Patterns differ by region.',
    alt: 'Girls dancing in colorful striped traditional Lithuanian costumes' },
  { slug: 'marguciai', name: 'Margučiai', category: 'Culture',
    caption: 'Easter eggs decorated with wax patterns, a spring tradition.',
    alt: 'Decorated Easter eggs with colorful wax patterns' },
  { slug: 'sodas', name: 'Sodas', category: 'Culture',
    caption: 'Hanging ornaments made from straw, used at weddings and holidays.',
    alt: 'A hanging geometric ornament made of straw' },
  { slug: 'stork', name: 'White Stork', category: 'Culture',
    caption: "Lithuania's national bird. A stork nest on the roof is said to bring good luck.",
    alt: 'A white stork with a red beak standing in a big nest' },
];

export const arena: Item = {
  slug: 'zalgiris-arena', name: 'Žalgiris Arena', category: 'Landmark',
  caption: 'The biggest indoor arena in the Baltics, home of the Žalgiris Kaunas team.',
  alt: 'Modern Žalgiris Arena building beside the river in Kaunas',
};

export const crowd: Item = {
  slug: 'arena-crowd', name: 'Basketball',
  caption: "Lithuania's favorite sport. The men's team won Olympic bronze in 1992, 1996, and 2000.",
  alt: 'A packed basketball arena full of fans during a game',
};

export const pins = [
  { name: 'Vilnius', lat: 54.687, lon: 25.28, item: places[2], capital: true },
  { name: 'Trakai', lat: 54.652, lon: 24.934, item: castles[0] },
  { name: 'Kaunas', lat: 54.899, lon: 23.885, item: castles[2] },
  { name: 'Hill of Crosses', lat: 56.015, lon: 23.417, item: places[0] },
  { name: 'Nida', lat: 55.3, lon: 21.0, item: places[3] },
  { name: 'Kernavė', lat: 54.886, lon: 24.853, item: places[4] },
];

export const quiz: Item[] = [...places, ...castles, ...food, ...culture, arena];

export const phrases = [
  { lt: 'Labas!', en: 'Hello', say: 'LAH-bahs', audio: 'labas', speak: 'Labas!' },
  { lt: 'Ačiū', en: 'Thank you', say: 'AH-choo', audio: 'aciu', speak: 'Ačiū.' },
  { lt: 'Taip / Ne', en: 'Yes / No', say: 'tape / neh', audio: 'taip-ne', speak: 'Taip. <break time="400ms"/> Ne.' },
  { lt: 'Iki!', en: 'Bye!', say: 'IH-kee', audio: 'iki', speak: 'Iki!' },
];
