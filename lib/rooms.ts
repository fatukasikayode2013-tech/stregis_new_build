export type Room = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    id: 'standard-room',
    slug: 'standard-room',
    name: 'Standard Room',
    price: 40000,
    image: 'Standard Deluxe.jpeg',
    description: 'Comfortable and elegant room with modern amenities and refined finishes.',
    features: ['King/Queen bed', 'Complimentary WiFi', 'Ensuite bathroom', 'Work desk']
  },
  {
    id: 'executive-room',
    slug: 'executive-room',
    name: 'Executive Room',
    price: 55000,
    image: 'Executive Room.jpeg',
    description: 'Spacious executive room with premium bedding and executive comforts.',
    features: ['Priority check-in', 'Mini bar', 'Premium toiletries', 'City view']
  },
  {
    id: 'executive-deluxe',
    slug: 'executive-deluxe',
    name: 'Executive Deluxe',
    price: 65000,
    image: 'Exe Deluxe.jpeg',
    description: 'Deluxe executive accommodation with elevated finishes and extra space.',
    features: ['King bed', 'Lounge area', 'In-room safe', 'Premium minibar']
  },
  {
    id: 'executive-suite',
    slug: 'executive-suite',
    name: 'Executive Suite',
    price: 90000,
    image: 'Exec Suite.jpeg',
    description: 'Luxury suite with separate living area, ideal for business and relaxation.',
    features: ['Living room', 'Butler service', 'Executive lounge access', 'Bath tub']
  },
  {
    id: 'royal-suite',
    slug: 'royal-suite',
    name: 'Royal Suite',
    price: 100000,
    image: 'Royal Suite.jpeg',
    description: 'Opulent suite with panoramic views and bespoke services.',
    features: ['Private terrace', 'Jacuzzi', 'Personalized menu', '24/7 concierge']
  },
  {
    id: 'apartment',
    slug: 'apartment',
    name: 'Apartment',
    price: 160000,
    image: 'Apartment.jpeg',
    description: 'Full apartment with kitchen and living spaces for extended stays.',
    features: ['Full kitchen', 'Separate living area', 'Washer/Dryer', 'Private entrance']
  },
  {
    id: 'presidential-suite',
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    price: 350000,
    image: 'Presi Suite.jpeg',
    description: 'The pinnacle of luxury — expansive living, unmatched service, and privacy.',
    features: ['Private elevator', 'Home theatre', 'Dedicated butler', 'Rooftop access']
  }
];

export function formatPrice(n: number) {
  return `₦${n.toLocaleString()}`;
}
