import { ActionType } from '../actions-types/Repositories';

interface Package {
  name: string,
  version: string,
  description: string,
  links: {
    npm: string,
    repository: string
  }
}

export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES,
}

export interface SearchRepositoriesSucessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload: Package[]
}

export interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR,
  payload: string
}


export type Action =
  SearchRepositoriesAction
  | SearchRepositoriesSucessAction
  | SearchRepositoriesErrorAction;
