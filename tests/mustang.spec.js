const { test, expect} = require('@playwright/test')

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:3000/')
})

test.describe('Testing Information Mustang', () => {

    test('debe poder selecionar uno de los modelos', async ({page}) => {
            const selector = await page.$('select#mustangInfo')

            await selector.selectOption({ value: 'ecoBoost'})
            await selector.selectOption({ value: 'Mustang GT'})
            await selector.selectOption({ value: 'Mach 1'})
            await selector.selectOption({ value: 'GT350'})
            await selector.selectOption({ value: 'GT500'})
            
            await page.waitForTimeout(1000);

    })

    test('debe cambiarse la informacion dependiendo del modelo', async ({page}) => {
        const selector = await page.$('select#mustangInfo')

        await selector.selectOption({ value: 'ecoBoost'})
        const p1 = await page.getByText('234.990.000')
        await expect(p1).toBeVisible()

        await selector.selectOption({ value: 'Mustang GT'})
        const p2 = await page.getByText(460)
        await expect(p2).toBeVisible()

        await selector.selectOption({ value: 'GT500'})
        const p5 = await page.getByText('5.2L supercargado V8 Predator')
        await expect(p5).toBeVisible()

      


    })
})