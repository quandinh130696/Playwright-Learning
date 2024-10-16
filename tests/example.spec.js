// @ts-check
const { test, expect } = require('@playwright/test');
const loginFunction = require('../tests/steps/login_page.js')
import usersData from "../data/users.json";

let invalidMsgLogin = 'Wrong credentials';


test.describe('invalid login', async () => {
  await loginFunction.loginInput(usersData.email, usersData.password, invalidMsgLogin);
});