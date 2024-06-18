// @ts-check
const { test, expect } = require("@playwright/test");

test("Camera Permission", async ({ browser }) => {
  const context = await browser.newContext({
    permissions: ["camera"],
  });

  const page = await context.newPage();
  await page.goto("https://permission.site/");
  const cameraButtonLocator = await page.getByRole("button", {
    name: "Camera",
    exact: true,
  });
  await cameraButtonLocator.click();

  await context.grantPermissions(["camera"]);

  await expect(cameraButtonLocator).toHaveClass("success");
  await expect(cameraButtonLocator).toHaveCSS(
    "background-color",
    "rgb(170, 255, 170)"
  );

  await context.close();
});
