import React from 'react' 
import routeData from 'react-router'
import { BrowserRouter as Router, Switch} from "react-router-dom";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Login from '../pages/Login'

const mockParams = {}

const mockLocation = {
  pathname: '/login',
  hash:'',
  search:'',
  state:''
}

const mockHistory = {
  action : "POP",
  block: () => {},
  createHref: () => {},
  go: () => {},
  goBack: () => {},
  goForward: () => {},
  go: () => {},
  length: 2,
  listen: () => {},
  location: mockLocation,
  push: () => {},
  replace: () => {},
}

const mockMatch = {
  isExact:true,
  params: {},
  path: "/login",
  url: "/login"
}

beforeEach(() => {
  jest.spyOn(routeData,'useHistory').mockReturnValue(mockHistory)
  jest.spyOn(routeData,'useLocation').mockReturnValue(mockLocation);
  jest.spyOn(routeData,'useParams').mockReturnValue(mockParams)
  jest.spyOn(routeData,'useRouteMatch').mockReturnValue(mockMatch)
})
afterEach(cleanup)

test('', async () => {
  const handleLoginFormSubmit = jest.fn();

  const {debug, getByPlaceholderText ,queryByTestId, getByText} = render(
    <Router>
      <Switch>
        <Login/>
      </Switch>
    </Router>
  )
  expect(getByText('Log in to your account')).toBeInTheDocument() //verify the title
  
  const form = queryByTestId('login-form')
  expect(form).toBeTruthy() //verify that form exists
  expect(form.tagName).toBe("FORM") //verify that the form is actually a form

  const loginButton = queryByTestId("login-button")
  expect(loginButton).toBeTruthy() // verify that button exists
  expect(loginButton.tagName).toBe("BUTTON") //verify that button is actually a button
  expect(loginButton).toHaveAttribute("disabled") //verify that button is initially disabled
 
  const mockUsername = "johndeer"
  const mockPassword = "johndeerx123"
  
  const usernameInput = getByPlaceholderText('Username...')
  const passwordInput = getByPlaceholderText('Password...')

  fireEvent.change(usernameInput,{target:{value: mockUsername}})
  fireEvent.change(passwordInput,{target:{value: mockPassword}})

  await waitFor(() => usernameInput)
  await waitFor(() => passwordInput)
  await waitFor(() => loginButton)

  expect(usernameInput).toHaveValue('johndeer')
  expect(passwordInput).toHaveValue('johndeerx123')
  expect(loginButton).toBeEnabled()

  form.onsubmit = handleLoginFormSubmit;

  fireEvent.click(loginButton);

  expect(handleLoginFormSubmit).toHaveBeenCalledTimes(1);

  debug();
})