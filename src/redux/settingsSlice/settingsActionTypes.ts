import { ScoreTypes } from 'defaultTypes';

export enum SettingsActions {
  ALLOW_MASTER_AS_PLAYER = 'ALLOW_MASTER_AS_PLAYER',
  CHANGE_CARD_IN_END = 'CHANGE_CARD_IN_END',
  SHOW_TIMER = 'SHOW_TIMER',
  SET_SCORE_TYPE = 'SET_SCORE_TYPE',
  SET_SHORT_TYPE = 'SET_SHORT_TYPE',
  SET_TIMER = 'SET_TIMER',
}

export interface ISetTimePayload {
  minutes: number;
  seconds: number;
}

export type IScoreType = ScoreTypes.CUSTOM | ScoreTypes.FIBONACHI | ScoreTypes.POWEROFTWO;

export interface ICardItem {
  id: string;
  value: string;
}
