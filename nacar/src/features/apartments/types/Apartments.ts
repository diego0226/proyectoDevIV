export interface Apartment {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  featured: boolean;
}
