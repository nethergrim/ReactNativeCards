export type Card = {
  id: number;
  name: string;
  type: string;
  atk?: number;
  def?: number;
  race: string;
  level?: number;
  card_images: CardImage[];
};

export type CardImage = {
  image_url_small: string;
};
