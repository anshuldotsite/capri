export interface Pricing {
  baby: number;
  small: number;
  medium: number;
  large: number;
  queen: number;
  king: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number; // For non-pizza items
  prices?: Pricing; // For pizza items
  category: 'pizza' | 'subs' | 'wings' | 'catering';
  image: string;
  popular?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

export const menuItems: MenuItem[] = [
  // Signature Pizzas
  {
    id: '1',
    name: 'Super',
    description: 'Mozzarella, shredded pepperoni, bacon, mushrooms, and green peppers.',
    prices: {
      baby: 13.40,
      small: 20.60,
      medium: 26.20,
      large: 34.40,
      queen: 48.75,
      king: 59.30
    },
    category: 'pizza',
    image: '/images/pizza-super.jpg',
    popular: true,
  },
  {
    id: '2',
    name: 'Galati',
    description: 'Mozzarella, feta, sun dried tomatoes, roasted garlic, artichokes, and hot peppers.',
    prices: {
      baby: 16.65,
      small: 23.95,
      medium: 30.80,
      large: 39.55,
      queen: 53.85,
      king: 65.00
    },
    category: 'pizza',
    image: '/images/pizza-galati.jpg',
  },
  {
    id: '3',
    name: 'Meat Lovers',
    description: 'Mozzarella, shredded pepperoni, bacon, ham, and Italian sausage.',
    prices: {
      baby: 13.40,
      small: 20.60,
      medium: 26.20,
      large: 34.40,
      queen: 48.75,
      king: 59.30
    },
    category: 'pizza',
    image: '/images/pizza-meat.jpg',
    popular: true,
  },
  {
    id: '4',
    name: 'Veggie',
    description: 'Mozzarella, tomatoes, onions, mushrooms, and green peppers.',
    prices: {
      baby: 13.40,
      small: 20.60,
      medium: 26.20,
      large: 34.40,
      queen: 48.75,
      king: 59.30
    },
    category: 'pizza',
    image: '/images/pizza-veg.jpg',
  },
  {
    id: '5',
    name: 'The Greek',
    description: 'Feta, mozzarella, tomatoes, onions, black olives, and green peppers.',
    prices: {
      baby: 15.05,
      small: 22.55,
      medium: 28.60,
      large: 37.05,
      queen: 51.85,
      king: 62.80
    },
    category: 'pizza',
    image: '/images/pizza-greek.jpg',
  },
  {
    id: '6',
    name: 'California Fusion',
    description: 'Mozzarella, red onions, roasted red peppers, broccoli, feta, and BBQ chicken.',
    prices: {
      baby: 15.85,
      small: 23.25,
      medium: 29.70,
      large: 38.30,
      queen: 52.85,
      king: 63.90
    },
    category: 'pizza',
    image: '/images/pizza-california.jpg',
  },
  {
    id: '7',
    name: 'The Sopranos',
    description: 'Mozzarella, caramelized onions, sun dried tomatoes, roasted garlic & Italian sausage.',
    prices: {
      baby: 15.00,
      small: 22.00,
      medium: 28.40,
      large: 36.90,
      queen: 50.75,
      king: 61.50
    },
    category: 'pizza',
    image: '/images/pizza-soprano.jpg',
  },
  {
    id: '8',
    name: 'Good Night Pizza',
    description: 'Mozzarella, shredded pepperoni, bacon, mushroom, ham, onion, hot peppers & roasted garlic.',
    prices: {
      baby: 15.95,
      small: 24.35,
      medium: 30.10,
      large: 38.60,
      queen: 55.05,
      king: 66.50
    },
    category: 'pizza',
    image: '/images/pizza-goodnight.jpg',
  },
  {
    id: '9',
    name: 'Bocconcini Pizza',
    description: 'Mozzarella, bocconcini, and fresh basil.',
    prices: {
      baby: 12.50,
      small: 18.80,
      medium: 24.70,
      large: 32.85,
      queen: 45.55,
      king: 55.60
    },
    category: 'pizza',
    image: '/images/pizza-bocconcini.jpg',
  },
  {
    id: '10',
    name: 'Nick George Pizza',
    description: 'Mozzarella, shredded pepperoni, bacon, and feta.',
    prices: {
      baby: 13.35,
      small: 20.05,
      medium: 26.00,
      large: 34.25,
      queen: 47.65,
      king: 58.00
    },
    category: 'pizza',
    image: '/images/pizza-nick.jpg',
  },
  // Subs
  {
    id: '11',
    name: 'Assorted Sub',
    description: 'Ham, salami, spiced loaf, cheese, lettuce, tomato, and our house dressing.',
    price: 12.50,
    category: 'subs',
    image: '/images/sub-assorted.jpg',
  },
  {
    id: '12',
    name: 'Meatball Sub',
    description: 'Homemade meatballs covered in meat sauce and melted mozzarella.',
    price: 13.50,
    category: 'subs',
    image: '/images/sub-meatball.jpg',
  },
  // Wings
  {
    id: '13',
    name: 'Jumbo Wings (1lb)',
    description: 'Crispy jumbo wings tossed in your choice of sauce: BBQ, Honey Garlic, or Hot.',
    price: 16.99,
    category: 'wings',
    image: '/images/wings.jpg',
  },
  // Catering
  {
    id: '14',
    name: 'Party Tray (24 Slices)',
    description: 'Perfect for events. Choice of 3 toppings.',
    price: 45.00,
    category: 'catering',
    image: '/images/catering.jpg',
  },
];

export const locations: Location[] = [
  {
    id: '1',
    name: 'Dougall Ave (HQ)',
    address: '3020 Dougall Ave, Windsor, ON',
    phone: '(519) 969-6969',
    hours: '11am - 11pm',
    coordinates: { lat: 42.285, lng: -83.015 },
  },
  {
    id: '2',
    name: 'Forest Glade',
    address: '9950 Tecumseh Rd E, Windsor, ON',
    phone: '(519) 979-9797',
    hours: '11am - 10pm',
    coordinates: { lat: 42.310, lng: -82.910 },
  },
  {
    id: '3',
    name: 'LaSalle',
    address: '5841 Malden Rd, LaSalle, ON',
    phone: '(519) 972-9722',
    hours: '11am - 10pm',
    coordinates: { lat: 42.220, lng: -83.050 },
  },
  {
    id: '4',
    name: 'Tecumseh',
    address: '1234 Lesperance Rd, Tecumseh, ON',
    phone: '(519) 735-7355',
    hours: '11am - 10pm',
    coordinates: { lat: 42.320, lng: -82.900 },
  },
];
