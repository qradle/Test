import fetch from 'isomorphic-fetch'

//EMPLOYEES
export const loadEmployees = (dispatch) =>  {
  dispatch({type: 'EMPLOYEES_LOAD_START'})
  fetch('/api/employee')
  .then( res => res.json() )
  .then( result => dispatch({type: 'EMPLOYEES_LOAD', payload: result}) )
}

export const createEmployee = (data) => (dispatch) =>  {
  fetch('/api/employee', {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then( res => res.json() )
  .then( result => dispatch({type: 'EMPLOYEES_CREATE', payload: result}) )
}

//EMPLOYEE
export const loadEmployee = (id) => (dispatch) =>  {
  dispatch({type: 'EMPLOYEE_LOAD_START'})
  fetch('/api/employee/' + id)
  .then( res => res.json() )
  .then( result => dispatch({type: 'EMPLOYEE_LOAD', payload: result}) )
}

export const saveEmployee = (data, id) => (dispatch) =>  {
  dispatch({type: 'EMPLOYEE_LOAD_START'})
  fetch('/api/employee/' + id, {
    method: 'PUT',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then( res => res.json() )
  .then( result => dispatch({type: 'EMPLOYEE_SAVE', payload: result}) )
}

export const deleteEmployee = (id) => (dispatch) =>  {
  fetch('/api/employee/' + id, { method: 'DELETE' })
  .then( res => res.json() )
  .then( result => dispatch({type: 'EMPLOYEE_DELETE'}) )
}

//DEPARTMENTS
export const loadDepartments = (dispatch) =>  {
  dispatch({type: 'DEPARTMENTS_LOAD_START'})
  fetch('/api/department')
  .then( res => res.json() )
  .then( result => dispatch({type: 'DEPARTMENTS_LOAD', payload: result}) )
}

export const createDepartment = (data) => (dispatch) =>  {
  fetch('/api/department', {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then( res => res.json() )
  .then( result => dispatch({type: 'DEPARTMENTS_CREATE', payload: result}) )
}

//DEPARTMENT
export const loadDepartment = (id) => (dispatch) =>  {
  dispatch({type: 'DEPARTMENT_LOAD_START'})
  fetch('/api/department/' + id)
  .then( res => res.json() )
  .then( result => dispatch({type: 'DEPARTMENT_LOAD', payload: result}) )
}

export const saveDepartment = (data, id) => (dispatch) =>  {
  dispatch({type: 'DEPARTMENT_LOAD_START'})
  fetch('/api/department/' + id, {
    method: 'PUT',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then( res => res.json() )
  .then( result => dispatch({type: 'DEPARTMENT_SAVE', payload: result}) )
}

export const deleteDepartment = (id) => (dispatch) =>  {
  fetch('/api/department/' + id, { method: 'DELETE' })
  .then( res => res.json() )
  .then( result => dispatch({type: 'DEPARTMENT_DELETE'}) )
}
