class Amazon{
    searchTF:string
    submitBtn:any
    checkBoxTF:any
    page:any
    product:any
    dropdown:any
    quantity:any 
    cart:any

    //@ts-ignore
    constructor(page){
        this.page = page
        this.searchTF=page.locator('input#twotabsearchtextbox')
        this.submitBtn = page.locator('#nav-search-submit-button')
        this.checkBoxTF=page.locator('//div[@id="p_n_g-1003495121111/44897277031"]/descendant::span[@class="a-size-base a-color-base" and .="10 GB & Above"]/preceding-sibling::div')
        this.product=page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[4]')
        this.dropdown= page.locator('//span[@class= "a-dropdown-label" and .= "Quantity:"]')
        this.quantity = page.locator('//div[@class="a-popover-inner"]/descendant::ul/li/a[@id="quantity_2"]')
        this.cart=page.locator('(//input[@id="add-to-cart-button"])[2]')
    }

    async performLogic(url: string, search: string) {
        await this.page.goto(url)
        //@ts-ignore
        await this.searchTF.fill(search)
        await this.submitBtn.click()
        await this.checkBoxTF.click()

        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.product.click()
        ])
        const newPageAmazon = new Amazon(popup)
        await newPageAmazon.dropdown.click()
        await newPageAmazon.quantity.click()
        await newPageAmazon.cart.click()
    }

}
export default Amazon; 

