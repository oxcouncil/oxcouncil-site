import { test, expect } from '@playwright/test'

test('navigation test', async ({ page }) => {

  const siteName = "The oxCouncil"
  const titleSeperator = " | "
  const navs: { name: string, url: string, title: string }[] = [
    {name: 'Home', url: '/', title: 'Home'},
    {name: 'Projects', url: '/projects', title: 'Projects'},
    {name: 'Members', url: '/members', title: 'Members'},
    {name: 'Blog', url: '/posts', title: 'Posts'}
  ]

  for (let i = 0; i < navs.length; i++)  {
    let nav = navs[i]
    await page.goto(nav.url)
    // await page.click(`text=${nav.name}`)
    await expect(page).toHaveURL(nav.url)
    await expect(page).toHaveTitle(nav.title + titleSeperator + siteName)
  }
})
