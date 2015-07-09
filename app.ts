/**
 * Created by amirrajabi on 8/07/15.
 */

import{
    Component,
    View,
    For,
    bootstrap
    } from "angular2/angular2"

@Component({
    selector : 'hello-world'
})
@View({

    directives: [For],
    //template: `<article>Hello {{ name }}</article>`
    template: `<ul><li *for="#name of names">Hello {{ name }}</li></ul>`

})

class HelloWorld{

    //name: string;
    names: Array;
    constructor(){
        //this.name = 'Amir';
        this.names = ['Amir', 'somy', 'Rahi', 'Arash']
    }

}

bootstrap(HelloWorld);