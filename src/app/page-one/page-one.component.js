"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var PageOneComponent = /** @class */ (function () {
    function PageOneComponent(router) {
        this.router = router;
    }
    PageOneComponent.prototype.ngOnInit = function () { };
    PageOneComponent.prototype.onNavigate = function () {
        this.router.navigate(['/page-two']);
    };
    PageOneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-one',
            templateUrl: './page-one.component.html',
            styleUrls: ['./page-one.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], PageOneComponent);
    return PageOneComponent;
}());
exports.PageOneComponent = PageOneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZS1vbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVMvRDtJQUVDLDBCQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7SUFFTCxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLHFDQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFWVyxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBS2dCLHlCQUFnQjtPQUhyQixnQkFBZ0IsQ0FXNUI7SUFBRCx1QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAncGFnZS1vbmUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZS1vbmUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlLW9uZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0cHVibGljIG9uTmF2aWdhdGUoKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS10d28nXSk7XG5cdH1cbn0iXX0=