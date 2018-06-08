$(function() {
    // RSS Feeds test suite
    describe('RSS Feeds', function() {
        // Makes sure that the allFeeds variable is defined an is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        // Ensures that each feed has a defined URL, which is not empty
        it('have a URL, which is not empty', function() {
            for(const feed of allFeeds) {
                expect(feed.url.length).toBeGreaterThan(0);
                expect(feed.url).toBeDefined();
            }
        });

        // Ensures that each feed has a name, which is not empty
        it('have a name, which is not empty', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            }
        })
    });


    // The menu test suite
    describe("The Menu", function() {
        const $body = $('body');
        const $menuIcon = $('.menu-icon-link');

        // Ensures the menu is hidden by default
        it('should be hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

        // Ensures the menu appears/disappears when the menu icon is clicked 
        it('changes visibility when menu icon is clicked', function() {
            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(false);
            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(true);            
        });
    });
    // Initial Entries test suite
    describe('Initial Entries', function() {
        // check whether async function is ready  
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0);
                done();
            }, 2000);            
        });

        // Ensures that there are entries within the .feed container
        it('are loaded within the feed', function(done) {
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
        });
    });
    // New Feed Selection test suite
    describe('New Feed Selection', function() {
        beforeEach(function(done) {
            setTimeout(function () {
                loadFeed(0);
                done();
            }, 2000);            
        });
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('when a new feed is loaded, the content changes', function(done) {
            expect($('.feed').first().text().length).toBeGreaterThan(0);
            done();
        })
    });
}());
