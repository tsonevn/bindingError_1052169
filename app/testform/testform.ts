import {Observable} from "data/observable";
import {topmost} from 'ui/frame';
import {Page} from 'ui/page';

export class viewModel extends Observable{
    page : Page;
       
    constructor(page) {
        super();
        this.page = page;
   }

    public backTap() {
       topmost().goBack();
    };

}

export function pageLoaded(args) {
    var page = <Page>args.object;
    page.bindingContext = new viewModel(page);
};