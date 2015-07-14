if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var RedditArticle = (function () {
    function RedditArticle() {
        this.votes = 10;
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
    }
    RedditArticle.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    RedditArticle.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article'
        }),
        angular2_1.View({
            template: " <article>\n                    <div class=\"votes\">{{ votes }}</div>\n                        <div class=\"main\">\n                        <h2>\n                        <a href=\"{{ link }}\">{{ title }}</a>\n                        </h2>\n                        <ul>\n                            <li><a href (click)='voteUp()'>upvote</a></li>\n                            <li><a href (click)='voteDown()'>downvote</a></li>\n                        </ul>\n                    </div>\n                </article>\n               "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticle);
    return RedditArticle;
})();
var RedditApp = (function () {
    function RedditApp() {
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
    };
    RedditApp = __decorate([
        angular2_1.Component({
            selector: 'reddit'
        }),
        angular2_1.View({
            template: "\n         <section class=\"new-link\">\n             <div class=\"control-group\">\n                 <div><label for=\"title\">Title:</label></div>\n                 <div><input name=\"title\" #newtitle></div>\n             </div>\n             <div class=\"control-group\">\n                 <div><label for=\"link\">Link:</label></div>\n                 <div><input name=\"link\" #newlink></div>\n             </div>\n\n             <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n         </section>\n\n         <reddit-article></reddit-article>\n      ",
            directives: [angular2_1.For],
            directives: [RedditArticle]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
})();
angular2_1.bootstrap(RedditApp);
