/// <reference types="cypress" />

context('<magic-emoji>', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render emoji from text', () => {
    cy.get('magic-emoji[data-testid]').should(el => {
      const [dom] = el.get()
      const emoji = dom.shadowRoot.querySelector('[role="img"]')

      el[0].text = 'bug'
      expect(emoji).to.contain('🐛')

      el[0].text = 'rocket'
      expect(emoji).to.contain('🚀')
    })
  })

  it('should render [role="img"] el with label from emoji', () => {
    cy.get('magic-emoji[data-testid]').should(el => {
      const [dom] = el.get()
      const emoji = dom.shadowRoot.querySelector('[role="img"]')

      delete el[0].text
      el[0].icon = '🌈'

      expect(emoji.getAttribute('aria-label')).to.equal('rainbow')
    })
  })
})
