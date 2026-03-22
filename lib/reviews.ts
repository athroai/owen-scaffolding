export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Dominic Bussey",
    rating: 5,
    text: "Great service. Communication is spot on. I highly recommend Owen Scaffolding!",
  },
  {
    id: "2",
    name: "Jason Lowe",
    rating: 5,
    text: "After being messed around by a few other companies, I found Owen Scaffolding who turned up when they said they would and offered a very professional service from start to finish.",
  },
  {
    id: "3",
    name: "John Newman",
    rating: 5,
    text: "Owen Scaffolding built a 2-storey scaffold for my back garden house extension. Really pleased with the job — they managed to get it done in a very tight space with poor access, and made modifications at short notice.",
  },
  {
    id: "4",
    name: "Matthew Dunn",
    rating: 5,
    text: "Great service. Called in the morning and put up in the afternoon! Fair price and cracking team.",
  },
  {
    id: "5",
    name: "Joanne Davies",
    rating: 5,
    text: "Excellent service. Highly recommend Colin and his crew. Very competitive prices, quick and reliable. They turn up when they say they will.",
  },
  {
    id: "6",
    name: "Luke Thomas",
    rating: 5,
    text: "Would highly recommend — always happy to help in any way he can. Prices are competitive and he gets the job done when he says he will. Scaffolds are always safe and accessible.",
  },
  {
    id: "7",
    name: "Rachel Thirza",
    rating: 5,
    text: "They turned up on time and completed a really tricky job in horrible weather. Other scaffolding companies said it wasn't possible — Owen proved them wrong. Very reasonable rates and most importantly Owen is friendly, professional and polite... a real gentleman.",
  },
];
