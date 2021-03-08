import { TaskStates } from "./TaskStates";
export interface IFilterParams {
    userId?: number;
    taskState?: TaskStates;
}
