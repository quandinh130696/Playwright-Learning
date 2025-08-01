import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import usersData from "../data/users.json";

let invalidMsgLogin = 'Wrong credentials';


test('invalid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto('/login');
  await login.loginInput(usersData.email, usersData.password);
  await expect(login.loginMsg).toHaveText(invalidMsgLogin);
});