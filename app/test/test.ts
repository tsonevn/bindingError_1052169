import {Observable} from "data/observable";
import {ObservableArray} from "data/observable-array";
import {topmost} from 'ui/frame';
import {Page} from 'ui/page';

export class viewModel extends Observable{
    private page : Page = null;
    public data:ObservableArray<any> = new ObservableArray();
    // data = [
    //        {description: "aaa"},
    //        {description: "bbb"},
    //        {description: "ccc"},
    // ]
     
    constructor(page) {
        super();

        this.data.push({description: "aaa"});
        this.data.push({description: "bbb"});
        this.data.push({description: "ccc"});

        this.page = page;
        this.set("rows1", new ObservableArray());
        this.set("rows2", new ObservableArray());
    }

    public tabChanged(args) {
         switch (args.newIndex) {
            case 0:
                break;
           case 1:
               this.set("rows1", new ObservableArray(this.data));
                break;
            case 2:
               this.set("rows2", new ObservableArray(this.data));
                break;
        }
    };

    public formTap()  {
      topmost().navigate({moduleName : "testform/testform"});
    };

}

export function pageLoaded(args) {
    var page = <Page>args.object;
    page.bindingContext = new viewModel(page);
};
