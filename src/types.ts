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