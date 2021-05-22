import { Dispatch } from 'redux';
import { ActionType } from '../actions-types/Repositories';
import { Action } from '../actions/Repositories';
import Api from '../../api/api';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await Api.getPackages(term);

      const names = data.objects.map((result: any) => {
        return result.package;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};