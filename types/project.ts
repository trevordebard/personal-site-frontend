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
}