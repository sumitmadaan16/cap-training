class Example{
    usernameTF:string
    passwordTF:string
    submitBtn:any
    page:any
    constructor(page){
        this.page = page
        this.usernameTF=page.locator('#username')
        this.passwordTF=page.locator('#password')
        this.submitBtn=page.locator('#submit')
    }

    async performLogic(url:string , username:string , password:string){
        await this.page.goto(url)
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.submitBtn.click()
    }
}
export default Example; 