from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")

    # Clear localStorage to ensure a clean state
    page.evaluate("localStorage.clear()")
    page.reload()

    header = page.get_by_role("heading", name="Materials Dashboard")

    # Wait for the initial color to be applied
    expect(header).to_have_css("background-color", "rgb(63, 81, 181)") # Indigo

    page.screenshot(path="jules-scratch/verification/verification_before.png")

    page.get_by_role("button", name="Toggle color picker").click()
    page.screenshot(path="jules-scratch/verification/verification_menu_open.png")

    page.get_by_role("button", name="Blue", exact=True).click()

    # Wait for the background color to change to blue
    expect(header).to_have_css("background-color", "rgb(33, 150, 243)") # Blue

    page.screenshot(path="jules-scratch/verification/verification_after.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)