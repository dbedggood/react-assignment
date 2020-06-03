describe("Search for flights", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Search return", () => {
        cy.get("button").contains("Return Trip").click()
        cy.get("select#origin").select("Wellington").should("have.value", "WLG")
        cy.get("select#destination")
            .select("Auckland")
            .should("have.value", "AKL")
        cy.get("input[type='date']#departure").type("2020-04-14")
        cy.get("input[type='date']#return").type("2020-04-16")
        cy.get("button").contains("Search").click()
        cy.get("div.flight").get("button").contains("Book This Flight").click()
    })

    it("Search one-way", () => {
        cy.get("button").contains("One-way Trip").click()
        cy.get("select#origin")
            .select("Christchurch")
            .should("have.value", "CHC")
        cy.get("select#destination")
            .select("Wellington")
            .should("have.value", "WLG")
        cy.get("input[type='date']#departure").type("2020-04-15")
        cy.get("button").contains("Search").click()
        cy.get("div.flight").get("button").contains("Book This Flight").click()
    })

    it("Search free", () => {
        cy.get("input[type='range']#maxPrice")
            .as("range")
            .invoke("val", 0)
            .trigger("input")
        cy.get("button").contains("Search").click()
        cy.get("div.flight").should("not.exist")
    })

    it("Search invalid", () => {
        cy.get("button").contains("Return Trip").click()
        cy.get("input[type='date']#departure").type("2020-04-17")
        cy.get("input[type='date']#return").type("2020-04-14")
        cy.get("button").contains("Search").click()
        cy.get("div.flight").should("not.exist")
    })
})
