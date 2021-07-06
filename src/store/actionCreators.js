import * as actionTypes from "./constants"
import {randomId} from '../utils/parse'

const changeEduExpAction = (eduExp) => ({
  type: actionTypes.CHANGE_EDU,
  eduExp
})
const changeSchExpAction = (schoolExp) => ({
  type: actionTypes.CHANGE_SCHOOL,
  schoolExp
})
const changeProExpAction = (programExp) => ({
  type: actionTypes.CHANGE_PROGRAM,
  programExp
})
const changeSkillAction = (skill) => ({
  type: actionTypes.CHANGE_SKILL,
  skill
})

const changeExpAction = (arr, type) => {
  let obj = {}
  switch (type) {
    case "eduExp":
      obj =  {
        type: actionTypes.CHANGE_EDU,
        eduExp: arr
      }
      break;
    case "schoolExp":
      obj =  {
        type: actionTypes.CHANGE_SCHOOL,
        schoolExp: arr
      }
      break;
    case "proExp":
      obj =  {
        type: actionTypes.CHANGE_PROGRAM,
        programExp: arr
      }
      break;
    case "skill":
      obj =  {
        type: actionTypes.CHANGE_SKILL,
        skill: arr
      }
      break;    
    default:
      break;
  }
  return obj
}

export const getAddExpAction = (expObj, edit) => {
  expObj.id = randomId()
  const type = expObj.type
  return (dispatch, getState) => {
    let arr = getState()[type]
    if(edit){
      let index = arr.findIndex(item => {
        return item.id === expObj.id
      })
      arr[index+1] = expObj
    }else{
      arr.push(expObj)
    }
    dispatch(changeExpAction(arr, type))
  }
}

export const getDeleteExpAction = (id, type) => {
  return (dispatch, getState) => {
    switch (type) {
      case "eduExp":
        let eduExpArr = getState().eduExp.filter(item => {
          return item.id !== id
        })
        dispatch(changeEduExpAction(eduExpArr))
        break;
      case "schExp":
        let schoolExpArr = getState().schoolExp.filter(item => {
          return item.id !== id
        })
        dispatch(changeSchExpAction(schoolExpArr))
        break;
      case "proExp":
        let proExpArr = getState().programExp.filter(item => {
          return item.id !== id
        })
        dispatch(changeProExpAction(proExpArr))
        break;   
      default:
        break;
    }
  }
}

export const getChangeIntrAction = (introduce) => {
  return {
    type: actionTypes.CHANGE_INTR,
    introduce
  }
}