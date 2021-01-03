import { ITag } from './tag';

/**
 * Model definition for Job
 */
export interface IJob {
  id: string;
  title?: string;
  description?: string;
  company?: string;
  tags: ITag[];
  preview?: any;
  bullets: { [key: string]: any };
  start_date?: string;
  end_date?: string;
}