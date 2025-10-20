import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import usersData from "../data/users.json";

let invalidMsgLogin = 'Wrong credentials';


test('First User invalid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto('/login');
  await login.loginInput(usersData.firstUser.email, usersData.firstUser.password);
  await expect(login.loginMsg).toHaveText(invalidMsgLogin);
});

test('Second User invalid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto('/login');
  await login.loginInput(usersData.secondUser.email, usersData.secondUser.password);
  await expect(login.loginMsg).toHaveText(invalidMsgLogin);
});