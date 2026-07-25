// Central site configuration — all real-world facts live here.
// Verify phone/hours with the venue before going live.

export const site = {
  name: "The Bamboo Nation",
  tagline: "Jaipur's Most Iconic Bamboo Dining Experience",
  description:
    "Bamboo architecture, handcrafted vegetarian cuisine, rooftop dining, live music and unforgettable celebrations — in the heart of Jaipur.",
  url: "https://www.thebamboonation.com",
  phone: "+91 63789 44696",
  phoneHref: "+916378944696",
  whatsapp: "916378944696",
  instagram: "https://www.instagram.com/thebamboonation_/",
  address: {
    street: "Plot No. 201, behind Om Sweet Caters, Rani Sati Nagar, near Ajmer Road",
    locality: "Nirman Nagar",
    city: "Jaipur",
    region: "Rajasthan",
    postalCode: "302019",
    country: "IN",
  },
  mapsQuery: "The Bamboo Nation Nirman Nagar Jaipur",
  hours: { open: "12:00", close: "23:00", label: "12:00 PM – 11:00 PM · Open every day" },
  priceRange: "₹₹",
};

export const stats = [
  { value: 25, suffix: "ft", label: "Hand-sculpted centrepiece" },
  { value: 100, suffix: "%", label: "Vegetarian kitchen" },
  { value: 350, suffix: "+", label: "Guests hosted nightly" },
  { value: 1200, suffix: "+", label: "Five-star reviews" },
];

export const experiences = [
  {
    title: "Bamboo Architecture",
    body: "Two storeys of hand-lashed bamboo, cane pavilions and woven cabanas — built by artisans, lit like a lantern after dark.",
    image: "/media/gallery-a21.jpg",
  },
  {
    title: "Vegetarian Cuisine",
    body: "A purely vegetarian kitchen that treats produce with reverence — from slow dals to wood-fired breads and pan-Asian classics.",
    image: "/media/gallery-b8.jpg",
  },
  {
    title: "Live Music",
    body: "Acoustic sets and Sufi evenings drift across the water. Come for dinner, stay for the encore.",
    image: "/media/gallery-b12.jpg",
  },
  {
    title: "Lagoon & Rooftop Dining",
    body: "Tables ring an illuminated lagoon at the feet of the guardian sculpture; the rooftop catches Jaipur's evening breeze.",
    image: "/media/gallery-a12.jpg",
  },
  {
    title: "Private Celebrations",
    body: "Birthdays, anniversaries and proposals staged against the most photographed backdrop in the city.",
    image: "/media/gallery-a33.jpg",
  },
  {
    title: "Family Dining",
    body: "Garden swings, open lawns and unhurried tables — an evening the whole family keeps talking about.",
    image: "/media/gallery-a3.jpg",
  },
];

// Signature dishes — replace with the current menu before launch.
export const menuSections = [
  {
    name: "Small Plates",
    items: [
      { name: "Dahi ke Kebab", note: "Hung curd, cashew, saffron crumb", price: "₹345" },
      { name: "Bamboo-shoot Dimsums", note: "Water chestnut, chilli oil", price: "₹365" },
      { name: "Paneer Tikka Angara", note: "Smoked over charcoal, mint chutney", price: "₹395" },
      { name: "Truffle Corn Chaat", note: "Roasted corn, truffle oil, sev", price: "₹325" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Dal Bamboo Nation", note: "48-hour black dal, house butter", price: "₹425" },
      { name: "Paneer Lababdar", note: "Tomato-cashew gravy, kasuri methi", price: "₹445" },
      { name: "Thai Green Curry", note: "Seasonal vegetables, jasmine rice", price: "₹465" },
      { name: "Wood-fired Margherita", note: "San Marzano, basil, fior di latte", price: "₹485" },
    ],
  },
  {
    name: "Desserts & Sips",
    items: [
      { name: "Sizzling Brownie", note: "Single-origin cocoa, vanilla bean", price: "₹365" },
      { name: "Kulfi Falooda", note: "Rose, pistachio, basil seeds", price: "₹295" },
      { name: "Bamboo Breeze", note: "Kaffir lime, lemongrass, mint", price: "₹275" },
      { name: "Jaipur Sunset", note: "Blood orange, ginger, rosemary smoke", price: "₹295" },
    ],
  },
];

export const events = [
  {
    title: "Birthdays",
    body: "Cake-table styling by the lagoon, dedicated hosts and a soundtrack that's yours.",
  },
  {
    title: "Corporate Evenings",
    body: "Off-sites, launches and team dinners for 20–200, with AV and private pavilions.",
  },
  {
    title: "Kitty Parties",
    body: "Afternoon high-tea menus, reserved cabanas and unlimited photographs.",
  },
  {
    title: "Live Music Nights",
    body: "Weekend acoustic and Sufi sessions on the lawn — arrive before sundown.",
  },
  {
    title: "Anniversaries & Proposals",
    body: "Private candle-lit decks, florals and a ring-safe plan the whole team rehearses.",
  },
];

// Curated guest quotes — swap in verbatim Google reviews before launch.
export const testimonials = [
  {
    quote:
      "The sculpture rising out of the lagoon at night is unlike anything else in Jaipur. We came for photos and stayed three hours.",
    name: "Ananya S.",
    context: "Anniversary dinner",
    rating: 5,
  },
  {
    quote:
      "Booked the rooftop for a team dinner of forty. Flawless service, and the live set had everyone off their phones.",
    name: "Rohit M.",
    context: "Corporate evening",
    rating: 5,
  },
  {
    quote:
      "Pure veg without a single boring dish. The dal and the wood-fired pizza are worth the drive from anywhere in the city.",
    name: "Priya K.",
    context: "Family dinner",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do I need a reservation?",
    a: "Walk-ins are welcome, but evenings and weekends fill fast — reserving a table guarantees lagoon-side or rooftop seating.",
  },
  {
    q: "Is the menu fully vegetarian?",
    a: "Yes. The kitchen is 100% vegetarian, with Indian, pan-Asian and wood-fired Italian menus plus a dedicated mocktail bar.",
  },
  {
    q: "Can you host private events?",
    a: "Birthdays, corporate evenings, kitty parties and anniversaries are hosted across the lawn, pavilions and rooftop for 20 to 200+ guests. Share your date on WhatsApp and our events team will plan it with you.",
  },
  {
    q: "Where are you located?",
    a: "Rani Sati Nagar, Brijlalpura, near Ajmer Road, Nirman Nagar, Jaipur — a short drive from Vaishali Nagar with parking at the gate.",
  },
];

export const gallery = [
  { src: "/media/gallery-a3.jpg", alt: "Aerial view of The Bamboo Nation at dusk — guardian sculpture, illuminated lagoon and garden swings" },
  { src: "/media/gallery-b3.jpg", alt: "The Bamboo Nation entrance with its neon sign glowing at night" },
  { src: "/media/gallery-a21.jpg", alt: "Aerial view of the two-storey bamboo pavilion above the lagoon and guardian sculpture" },
  { src: "/media/gallery-b12.jpg", alt: "Woven cane lanterns glowing across the pavilion ceiling" },
  { src: "/media/gallery-a12.jpg", alt: "Top-down view of the illuminated lagoon and its ringside tables at night" },
  { src: "/media/gallery-b8.jpg", alt: "The Bamboo Nation food menu on a hand-crafted wooden table" },
  { src: "/media/gallery-a33.jpg", alt: "Top-down view of the guardian sculpture rising from the lagoon" },
  { src: "/media/gallery-a42.jpg", alt: "Front elevation at night — pavilion, birdcage cabanas and the guardian above the lit lagoon" },
];
