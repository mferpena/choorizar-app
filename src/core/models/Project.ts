interface Character {
  id: string;
  name: string;
  description: string;
}

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  characters: Character[];
}

interface Resource {
  title: string;
  url: string;
  type: "PROMOTIONAL" | "BANNER" | "HOVER" | "CHARACTER_ID" | string;
  description: string;
}

interface PaymentMethod {
  url: string;
  message: string;
  method: "PAYPAL" | "PATREON" | "GUMROAD" | "KO-FI" | string;
  resource: string;
  amount: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  chapters: Chapter[];
  resources: Resource[];
  paymentMethod: PaymentMethod;
}
