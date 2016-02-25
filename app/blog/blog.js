System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Blog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Blog = (function () {
                function Blog() {
                    this.newStoryFormVisible = false;
                    this.alertVisible = false;
                    this.posts = [{
                            id: 1,
                            date: "01.01.2016",
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis volutpat purus quis feugiat. Etiam lacinia ut nunc id luctus. Sed ac felis vel massa finibus fringilla. Aliquam id ligula metus. Sed turpis metus, eleifend ac pharetra et, aliquet et mauris. Ut turpis arcu, porttitor ut pretium non, vehicula lobortis enim. Sed orci augue, tincidunt in venenatis eget, malesuada vel odio. Integer odio libero, elementum bibendum leo rhoncus, ultricies viverra purus. Aliquam faucibus porta est nec mattis. Proin faucibus turpis nisi, nec scelerisque sapien tempor vel. Nullam volutpat, augue ultrices auctor feugiat, velit erat mollis nisi, nec maximus ante ex in lectus. Mauris ut aliquam odio, eget auctor augue. In placerat ante sit amet ligula mattis, quis posuere lorem euismod. Curabitur enim orci, venenatis quis dui in, commodo vestibulum ligula. Aenean faucibus sed ex vel dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae metus ultricies, molestie quam in, porta erat. Morbi quis efficitur felis. Sed semper id justo tristique pellentesque. Ut quis tortor lacinia, laoreet orci ut, blandit leo. Quisque vitae pharetra sapien. Proin viverra magna quam, at porta ex blandit ac. In ex augue, consectetur vel arcu in, vestibulum rhoncus metus. Praesent dictum, purus sed pellentesque fermentum, lacus massa faucibus diam, at posuere neque sem vitae nisi. Curabitur sapien urna, vestibulum a neque a, consectetur volutpat massa. Aenean sodales mollis justo sed tempus. Etiam tristique in velit non gravida. Proin eget augue vitae felis consequat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo non elit quis ultricies. Donec tristique diam justo, ac tempor ante consequat vitae. Quisque viverra tortor neque, nec suscipit dolor luctus eget. In quis urna sem. Aliquam erat volutpat. Nam in interdum urna, ac cursus leo. Fusce ipsum ipsum, rutrum ut vestibulum sit amet, fermentum et libero. Proin rutrum nec lectus quis elementum. Curabitur dapibus ante urna, dignissim volutpat lectus venenatis non. Maecenas scelerisque luctus mollis. Duis at consectetur turpis, at tincidunt mauris. Cras aliquam, mi eget eleifend rhoncus, mauris sapien blandit quam, vitae tempus tellus diam sit amet elit. Pellentesque aliquam, elit at mollis commodo, ex lorem lacinia nisi, quis posuere nunc nisl nec metus. Suspendisse cursus, massa non viverra pulvinar, purus tellus imperdiet nunc, at condimentum ipsum neque sed felis. Donec sed egestas mi. Proin tristique turpis in enim maximus sollicitudin viverra convallis justo. Sed sagittis nunc et tincidunt porta. Integer nec tempus mauris, sit amet mollis sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales ex vel arcu blandit maximus. Nam ultrices feugiat ultricies. Duis pulvinar, dolor facilisis maximus consequat, lectus ipsum tincidunt ligula, id porttitor leo libero vitae tellus. Integer cursus, quam at facilisis cursus, arcu ante imperdiet tellus, id tincidunt leo velit nec eros. Suspendisse imperdiet dui sit amet ornare laoreet. Proin vel euismod leo, bibendum varius mauris. Praesent dictum eget libero quis imperdiet. Maecenas bibendum risus velit, iaculis tincidunt elit aliquam vel. Donec mauris sem, gravida quis felis ac, gravida commodo augue. Nam ac purus dictum lorem consectetur facilisis at sed diam. Praesent auctor gravida fringilla. Mauris accumsan tempor urna at vestibulum."
                        },
                        {
                            id: 2,
                            date: "02.01.2016",
                            title: "Quisque sagittis volutpat purus quis feugiat. Etiam...",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis volutpat purus quis feugiat. Etiam lacinia ut nunc id luctus. Sed ac felis vel massa finibus fringilla. Aliquam id ligula metus. Sed turpis metus, eleifend ac pharetra et, aliquet et mauris. Ut turpis arcu, porttitor ut pretium non, vehicula lobortis enim. Sed orci augue, tincidunt in venenatis eget, malesuada vel odio. Integer odio libero, elementum bibendum leo rhoncus, ultricies viverra purus. Aliquam faucibus porta est nec mattis. Proin faucibus turpis nisi, nec scelerisque sapien tempor vel. Nullam volutpat, augue ultrices auctor feugiat, velit erat mollis nisi, nec maximus ante ex in lectus. Mauris ut aliquam odio, eget auctor augue. In placerat ante sit amet ligula mattis, quis posuere lorem euismod. Curabitur enim orci, venenatis quis dui in, commodo vestibulum ligula. Aenean faucibus sed ex vel dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae metus ultricies, molestie quam in, porta erat. Morbi quis efficitur felis. Sed semper id justo tristique pellentesque. Ut quis tortor lacinia, laoreet orci ut, blandit leo. Quisque vitae pharetra sapien. Proin viverra magna quam, at porta ex blandit ac. In ex augue, consectetur vel arcu in, vestibulum rhoncus metus. Praesent dictum, purus sed pellentesque fermentum, lacus massa faucibus diam, at posuere neque sem vitae nisi. Curabitur sapien urna, vestibulum a neque a, consectetur volutpat massa. Aenean sodales mollis justo sed tempus. Etiam tristique in velit non gravida. Proin eget augue vitae felis consequat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo non elit quis ultricies. Donec tristique diam justo, ac tempor ante consequat vitae. Quisque viverra tortor neque, nec suscipit dolor luctus eget. In quis urna sem. Aliquam erat volutpat. Nam in interdum urna, ac cursus leo. Fusce ipsum ipsum, rutrum ut vestibulum sit amet, fermentum et libero. Proin rutrum nec lectus quis elementum. Curabitur dapibus ante urna, dignissim volutpat lectus venenatis non. Maecenas scelerisque luctus mollis. Duis at consectetur turpis, at tincidunt mauris. Cras aliquam, mi eget eleifend rhoncus, mauris sapien blandit quam, vitae tempus tellus diam sit amet elit. Pellentesque aliquam, elit at mollis commodo, ex lorem lacinia nisi, quis posuere nunc nisl nec metus. Suspendisse cursus, massa non viverra pulvinar, purus tellus imperdiet nunc, at condimentum ipsum neque sed felis. Donec sed egestas mi. Proin tristique turpis in enim maximus sollicitudin viverra convallis justo. Sed sagittis nunc et tincidunt porta. Integer nec tempus mauris, sit amet mollis sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales ex vel arcu blandit maximus. Nam ultrices feugiat ultricies. Duis pulvinar, dolor facilisis maximus consequat, lectus ipsum tincidunt ligula, id porttitor leo libero vitae tellus. Integer cursus, quam at facilisis cursus, arcu ante imperdiet tellus, id tincidunt leo velit nec eros. Suspendisse imperdiet dui sit amet ornare laoreet. Proin vel euismod leo, bibendum varius mauris. Praesent dictum eget libero quis imperdiet. Maecenas bibendum risus velit, iaculis tincidunt elit aliquam vel. Donec mauris sem, gravida quis felis ac, gravida commodo augue. Nam ac purus dictum lorem consectetur facilisis at sed diam. Praesent auctor gravida fringilla. Mauris accumsan tempor urna at vestibulum."
                        },
                        {
                            id: 3,
                            date: "03.01.2016",
                            title: "Sed turpis metus, eleifend ac pharetra et, aliquet et...",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis volutpat purus quis feugiat. Etiam lacinia ut nunc id luctus. Sed ac felis vel massa finibus fringilla. Aliquam id ligula metus. Sed turpis metus, eleifend ac pharetra et, aliquet et mauris. Ut turpis arcu, porttitor ut pretium non, vehicula lobortis enim. Sed orci augue, tincidunt in venenatis eget, malesuada vel odio. Integer odio libero, elementum bibendum leo rhoncus, ultricies viverra purus. Aliquam faucibus porta est nec mattis. Proin faucibus turpis nisi, nec scelerisque sapien tempor vel. Nullam volutpat, augue ultrices auctor feugiat, velit erat mollis nisi, nec maximus ante ex in lectus. Mauris ut aliquam odio, eget auctor augue. In placerat ante sit amet ligula mattis, quis posuere lorem euismod. Curabitur enim orci, venenatis quis dui in, commodo vestibulum ligula. Aenean faucibus sed ex vel dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae metus ultricies, molestie quam in, porta erat. Morbi quis efficitur felis. Sed semper id justo tristique pellentesque. Ut quis tortor lacinia, laoreet orci ut, blandit leo. Quisque vitae pharetra sapien. Proin viverra magna quam, at porta ex blandit ac. In ex augue, consectetur vel arcu in, vestibulum rhoncus metus. Praesent dictum, purus sed pellentesque fermentum, lacus massa faucibus diam, at posuere neque sem vitae nisi. Curabitur sapien urna, vestibulum a neque a, consectetur volutpat massa. Aenean sodales mollis justo sed tempus. Etiam tristique in velit non gravida. Proin eget augue vitae felis consequat ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo non elit quis ultricies. Donec tristique diam justo, ac tempor ante consequat vitae. Quisque viverra tortor neque, nec suscipit dolor luctus eget. In quis urna sem. Aliquam erat volutpat. Nam in interdum urna, ac cursus leo. Fusce ipsum ipsum, rutrum ut vestibulum sit amet, fermentum et libero. Proin rutrum nec lectus quis elementum. Curabitur dapibus ante urna, dignissim volutpat lectus venenatis non. Maecenas scelerisque luctus mollis. Duis at consectetur turpis, at tincidunt mauris. Cras aliquam, mi eget eleifend rhoncus, mauris sapien blandit quam, vitae tempus tellus diam sit amet elit. Pellentesque aliquam, elit at mollis commodo, ex lorem lacinia nisi, quis posuere nunc nisl nec metus. Suspendisse cursus, massa non viverra pulvinar, purus tellus imperdiet nunc, at condimentum ipsum neque sed felis. Donec sed egestas mi. Proin tristique turpis in enim maximus sollicitudin viverra convallis justo. Sed sagittis nunc et tincidunt porta. Integer nec tempus mauris, sit amet mollis sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales ex vel arcu blandit maximus. Nam ultrices feugiat ultricies. Duis pulvinar, dolor facilisis maximus consequat, lectus ipsum tincidunt ligula, id porttitor leo libero vitae tellus. Integer cursus, quam at facilisis cursus, arcu ante imperdiet tellus, id tincidunt leo velit nec eros. Suspendisse imperdiet dui sit amet ornare laoreet. Proin vel euismod leo, bibendum varius mauris. Praesent dictum eget libero quis imperdiet. Maecenas bibendum risus velit, iaculis tincidunt elit aliquam vel. Donec mauris sem, gravida quis felis ac, gravida commodo augue. Nam ac purus dictum lorem consectetur facilisis at sed diam. Praesent auctor gravida fringilla. Mauris accumsan tempor urna at vestibulum."
                        }];
                }
                Blog.prototype.closeAlert = function () {
                    this.alertVisible = false;
                };
                Blog.prototype.addNewStoryClicked = function () {
                    this.newStoryFormVisible = true;
                };
                Blog.prototype.saveNewStory = function () {
                    this.newStoryFormVisible = false;
                    this.alertVisible = true;
                    //TODO: implement save new story method
                };
                Blog.prototype.editButtonPressed = function (item) {
                    console.log("editButtonPressed", item);
                    //TODO: implement edit story method
                };
                Blog.prototype.deleteButtonPressed = function (item) {
                    console.log("editButtonPressed", item);
                    //TODO: implement delete story method
                };
                Blog = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/blog/blog.html",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], Blog);
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=blog.js.map