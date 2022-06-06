export type Card = {
  id: string;
  name: string;
  type: string;
  atk?: string;
  def?: string;
  race: string;
  level?: number;
  card_images: CardImage[];
};

export type CardImage = {
  image_url_small: string;
};
