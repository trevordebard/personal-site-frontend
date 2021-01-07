import { IDemoImage } from './demo-image';
import { ITag } from './tag';

/**
 * Model definition for Project
 */
export interface IProject {
  id: string;
  name?: string;
  description?: string;
  tags: ITag[];
  previewImg?: any;
  link?: string;
  slug: string;
  demo_images: IDemoImage[];
}