class MissionControlPage {

    get viewDocsLink() { return cy.get('a[id="3FVmtRGghU83YDxpSDD2cM"]'); }
    get exploreManagedAccountsLink() { return cy.get('a[id="4U0yG9HFuE7YfR0gVEoRON"]'); } 
    get learMoreLink() { return cy.get('a[id="2nfVBs9ZbojosiGvaPLQma"]'); } 

    get resourcesHeader() { return cy.get('.c-cUhiIV.c-bgjeIh .c-buvHyO.c-buvHyO-idGZmCD-css .c-PJLV.c-fNZqWL'); }

    scrollToResourcesHeader() {
        this.resourcesHeader.scrollIntoView();
    }
}

export default new MissionControlPage();