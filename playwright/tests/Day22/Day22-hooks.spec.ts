import {test} from '@playwright/test'

test.beforeAll("hooks1" , async()=>{
    console.log("beforeAll");
    //depends on no. of workers, each worker run this statement
})
test.beforeEach("hooks2" , async()=>{
    console.log("beforeEach");
})
test.afterAll("hooks3" , async()=>{
    console.log("AfterAll");
    //depends on no. of workers, each worker run this statement
})
test.afterEach("hooks4" , async()=>{
    console.log("AfterEach");
})


test("test1" , async()=>{
    console.log("test1");
})
test("test2" , async()=>{
    console.log("test2");
})
test("test3" , async()=>{
    console.log("test2");
})
test("test4" , async()=>{
    console.log("test2");
})
test("test5" , async()=>{
    console.log("test2");
})