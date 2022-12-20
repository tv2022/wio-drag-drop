import { Executor, HttpClient } from 'selenium-webdriver/http';
import * as webDriver from 'selenium-webdriver';

describe('Drag and drop', () => {

  it('Test drag and drop', async () => {
    const sessionId: any = browser.sessionId;
    const client: HttpClient = new HttpClient('http://localhost:4444/wd/hub');
    const executor: Executor = new Executor(client);
    const driver = new webDriver.WebDriver(sessionId, executor);

    await browser.url('https://material.angular.io/cdk/drag-drop/overview')
    await browser.maximizeWindow();
    await browser.pause(2000)

    const source = await driver.findElement(webDriver.By.xpath(`(.//div[text()='Get to work'])[1]`))
    const target = await driver.findElement(webDriver.By.xpath(`(.//div[text()='Get up'])[1]`))
    await driver.actions().mouseDown(source)
      .mouseMove(target)
      .mouseUp(target)
      .perform();

    await browser.pause(5000)
  })
})
