import { test } from "@playwright/test";

/**
 * TYPES OF ANNOTATIONS
 * 
 * skip       → Skip this test
 * only       → Run only this test
 * fixme      → Mark test as broken (expected to fail)
 * fail       → Mark test as expected to fail
 * describe   → Group tests together
 * slow       → Mark test as slow (extra timeout)
 * setTimeout → Set custom timeout for a test
 */

// Skip: test will not run
test.skip("test1 - skipped", async () => {
  console.log("This will not run");
});

// Only: run this test exclusively
test.only("test2 - only", async () => {
  console.log("This is the only test that runs");
});

// Regular test
test("test3 - normal", async () => {
  console.log("This runs normally");
});

// Fixme: mark as broken, Playwright expects failure
test.fixme("test4 - fixme", async () => {
  console.log("This is marked as broken");
});

// Fail: mark as expected to fail
test.fail("test5 - fail", async () => {
  console.log("This is expected to fail");
});

// Slow: mark test as slow (timeout is tripled)
test.slow("test6 - slow", async () => {
  console.log("This test is considered slow");
});

// SetTimeout: custom timeout for this test
test("test7 - setTimeout", async ({}, testInfo) => {
  testInfo.setTimeout(10000); // 10 seconds
  console.log("This test has a custom timeout");
});

// Describe: group tests together
test.describe("Grouped tests", () => {
  test("test8 - inside describe", async () => {
    console.log("Grouped test 1");
  });

  test("test9 - inside describe", async () => {
    console.log("Grouped test 2");
  });
});
