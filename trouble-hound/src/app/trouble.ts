export interface Trouble {
  troubleOrderNumber: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Feature' | 'Bug' | 'Documentation';
  opening?: Date;
  closure?: Date;
}
