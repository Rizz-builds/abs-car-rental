export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  badge: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const BUSINESS_INFO = {
  name: 'ABS Rent-A-Car',
  proprietor: 'Md. Anwar Hossain',
  tagline: 'Reliable Transportation for Every Journey',
  subtitle: 'AC Cars, Microbuses, HiAce and Pickup Trucks available for rent.',
  location: 'MOGHBAZAR, DHAKA',
  fullAddress: '82/A, Shaheed Sangbadik Selina Parveen Road, Wireless Circle, Moghbazar, Dhaka-1217',
  phones: ['01715-473690', '01740-940737'],
  whatsapp: '8801715473690',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Wireless%20Circle,%20Moghbazar,%20Dhaka-1217&t=&z=14&ie=UTF8&iwloc=&output=embed',
};

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Reliable Service',
    description: 'Dependable vehicles and straightforward rental process you can count on for your travel needs.',
    iconName: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Quality Vehicles',
    description: 'A selection of well-maintained AC cars, microbuses, HiAce vans and pickup trucks for rent.',
    iconName: 'Car',
  },
  {
    id: '3',
    title: 'Convenient Rental',
    description: 'Simple and direct rental arrangements. Contact us and we will help you find the right vehicle.',
    iconName: 'Calendar',
  },
  {
    id: '4',
    title: 'Direct Customer Support',
    description: 'Speak directly with the proprietor for vehicle availability, pricing and rental details.',
    iconName: 'Headphones',
  },
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'ac-cars',
    name: 'AC Cars',
    category: 'AC CARS',
    description: 'Comfortable air-conditioned cars for personal travel, business trips and city commutes.',
    badge: 'AC CARS',
    image: '/vehicles/acCar.jpg', // Ensure the file extension matches your folder
  },
  {
    id: 'microbuses',
    name: 'Microbuses',
    category: 'MICROBUSES',
    description: 'Spacious passenger microbuses (Toyota Noah / Esquire) for family trips and group travel.',
    badge: 'MICROBUSES',
    image: '/vehicles/microbus.jpg',
  },
  {
    id: 'hiace',
    name: 'HiAce',
    category: 'HIACE',
    description: 'Toyota HiAce passenger vans for larger groups, long-distance journeys, and corporate travel.',
    badge: 'HIACE',
    image: '/vehicles/hiace.jpeg',
  },
  {
    id: 'pickup-trucks',
    name: 'Pickup Trucks',
    category: 'PICKUP TRUCKS',
    description: 'Open and covered pickup trucks for goods transport, deliveries, and practical cargo carrying.',
    badge: 'PICKUP TRUCKS',
    image: '/vehicles/pickup.jpg',
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AC Cars for Rent',
    description: 'Air-conditioned cars available for rent for personal and business travel in and around Dhaka.',
  },
  {
    id: '2',
    title: 'Microbus Rental',
    description: 'Microbuses for group transportation, suitable for family trips and short-distance travel.',
  },
  {
    id: '3',
    title: 'HiAce Rental',
    description: 'Toyota HiAce vans for rent, ideal for larger groups and longer journeys with comfortable seating.',
  },
  {
    id: '4',
    title: 'Pickup Truck Rental',
    description: 'Pickup trucks for rent for goods transport, deliveries and practical load-carrying needs.',
  },
];