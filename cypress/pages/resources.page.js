class ResourcesPage {

    get mostPopularHeader() { return cy.get('section:nth-child(3) div.c-cUhiIV h3'); }
    get firstBlog() { return cy.get('a[href="/resources/sms-vs-mms"]'); }

    clickOnFirstBlog() {
        this.firstBlog.click();
    }

    scrollToMostPopularHeader() {
        this.mostPopularHeader.scrollIntoView();
    }
}

export default new ResourcesPage();