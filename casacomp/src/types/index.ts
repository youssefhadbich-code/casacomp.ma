export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  specifications: {
    [key: string]: string | number;
  };
  features: string[];
  applications: string[];
  images: {
    url: string;
    alt: string;
  }[];
  price: {
    value: number;
    currency: string;
  };
  variants?: {
    id: string;
    name: string;
    price: number;
  }[];
  dimensions: {
    length: number;
    width: number;
    height: number;
    weight: number;
    unit: string;
  };
  warranty: {
    duration: string;
    coverage: string;
  };
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  deliveryTime: string;
  materials: string[];
  maintenance: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  imageUrl: string;
}