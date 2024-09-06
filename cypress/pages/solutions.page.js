class SolutionsPage {

    get travelAndHospitalityImage() { return cy.get('a[href="/solutions/travel-and-hospitality"]'); }

    scrollToTravelAndHospitalityImage() {
        this.travelAndHospitalityImage.scrollIntoView();
    }

    clickOnTravelAndHospitalityImage() {
        this.travelAndHospitalityImage.click();
    }
}

export default new SolutionsPage();