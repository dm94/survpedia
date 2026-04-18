from playwright.sync_api import sync_playwright

def run_verify(page):
    # Check English Bicycle
    page.goto("http://localhost:4321/en/inventions/bicycle")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/bicycle_en.png")

    # Check Spanish Pasteurization
    page.goto("http://localhost:4321/es/knowledge/pasteurization")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/pasteurizacion_es.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_verify(page)
        finally:
            context.close()
            browser.close()
