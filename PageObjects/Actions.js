exports.Actions= 
class Actions{
    constructor(page){
        this.page= page;
    }

    async click(element){
        await element.click();
    }
    async fillText(element, text){
        await element.fill(text);
    }
    async getText(element){
        return await element;
    }
    async gotoUrl(url){
        await this.page.goto(url);
    }

}