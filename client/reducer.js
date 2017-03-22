import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

var employees_reducer = handleActions({
    'EMPLOYEES_LOAD_START': () => ({
      initialized: false,
      loading: true,
      error: null,
      items: null
    }),
    'EMPLOYEES_LOAD': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'EMPLOYEES_CREATE': (state, action) => {
      if (action.error) {
        return state
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: [...state.items, action.payload]
        }
      }
    }
  }, {
    initialized: false,
    loading: false,
    error: null,
    items: null
  }
)

var employee_reducer = handleActions({
    'EMPLOYEE_LOAD_START': () => ({
      initialized: false,
      loading: true,
      error: null,
      items: null
    }),
    'EMPLOYEE_LOAD': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'EMPLOYEE_SAVE': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'EMPLOYEE_DELETE': (state, action) => {
      if (action.error) {
        return state
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: null
        }
      }
    }
  }, {
    initialized: false,
    loading: false,
    error: null,
    items: null
  }
)

var departments_reducer = handleActions({
    'DEPARTMENTS_LOAD_START': () => ({
      initialized: false,
      loading: true,
      error: null,
      items: null
    }),
    'DEPARTMENTS_LOAD': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'DEPARTMENTS_CREATE': (state, action) => {
      if (action.error) {
        return state
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: [...state.items, action.payload]
        }
      }
    }
  }, {
    initialized: false,
    loading: false,
    error: null,
    items: null
  }
)

var department_reducer = handleActions({
    'DEPARTMENT_LOAD_START': () => ({
      initialized: false,
      loading: true,
      error: null,
      items: null
    }),
    'DEPARTMENT_LOAD': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'DEPARTMENT_SAVE': (state, action) => {
      if (action.error) {
        return {
          ...state,
          initialized: true,
          loading: false,
          error: action.payload
        }
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: action.payload
        }
      }
    },
    'DEPARTMENT_DELETE': (state, action) => {
      if (action.error) {
        return state
      } else {
        return {
          ...state,
          initialized: true,
          loading: false,
          items: null
        }
      }
    }
  }, {
    initialized: false,
    loading: false,
    error: null,
    items: null
  }
)

export default combineReducers({
  employees: employees_reducer,
  employee: employee_reducer,
  departments: departments_reducer,
  department: department_reducer,
})
