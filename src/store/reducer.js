import * as actionTypes from './constants';
import { 
  edu as eduExp, 
  schoolExp, 
  programExp, 
  skill, 
  introduceMyself as introduce 
} from '../common/local-data'

const defaultState = {
  introduce,
  eduExp,
  schoolExp,
  programExp,
  skill
}

function reducer(state=defaultState, action){
  switch(action.type){
    case actionTypes.CHANGE_EDU:
      return {...state, eduExp: action.eduExp};
    case actionTypes.CHANGE_SCHOOL:
      return {...state, schoolExp: action.schoolExp};
    case actionTypes.CHANGE_PROGRAM:
      return {...state, programExp: action.programExp};
    case actionTypes.CHANGE_SKILL:
      return {...state, skill: action.skill};
    case actionTypes.CHANGE_INTR:
      return {...state, introduce: action.introduce};
    default:
      return state;
  }
}
export default reducer