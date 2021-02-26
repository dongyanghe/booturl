//教程： http://www.protractortest.org

import { browser, element, by } from 'protractor';

// const DOMAIN = '127.0.0.1:8090';
// const TARGET_ROOT = 'http://'+DOMAIN;
// let token = '45251802FA741FE107786F1894F4F0FA';
// describe('test app', function() {
//   it('index',()=>{
//   	console.log("test------------------------------测试用例");
//   });

//   //	跳转到index.html
//   it('to index', function() {
// 	  //	browser对象是由Protractor提供
// 	  console.log("test------------------------------" + browser);
// 	  //	打开index.html这个页面
// 	  browser.get(TARGET_ROOT + '/index.html');
// 	  //	browser.getLocationAbsUrl()获取到地址栏的URL
// 	  browser.getLocationAbsUrl().then(function(url) {
// 		console.log(url);
// 	  });
//   });
// });
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});