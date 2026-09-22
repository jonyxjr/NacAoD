export type NationStatus = 'planned' | 'active' | 'archived';

export interface Nation {
  id: string;
  name: string;
  status: NationStatus;
  capital?: string;
  leader?: string;
  population?: number;
  territory?: number;
  emblemUrl?: string;
}
