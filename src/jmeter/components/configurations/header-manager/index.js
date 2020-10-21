import {elementProp, stringProp} from "@/jmeter/props";
import Configuration from "@/jmeter/components/configurations/configuration";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "HeaderPanel",
      testclass: "HeaderManager",
      testname: "HeaderManager",
      enabled: "true"
    },
  }
};

export default class HeaderManager extends Configuration {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);

    this.headers = [];
    let collectionProp = this.initCollectionProp(this.props, 'HeaderManager.headers');
    collectionProp.forEach(elementProp => {
      let name = elementProp.elements['Header.name'].value;
      let value = elementProp.elements['Header.value'].value;
      let header = {name: name, value: value, enable: true};

      this.headers.push(header);
    })
  }

  updateProps() {
    let collectionProp = this.props['HeaderManager.headers'];
    collectionProp.clear();
    this.headers.forEach(header => {
      if (header.enable !== false) {
        let ep = elementProp("", "Header");
        ep.add(stringProp("Header.name", header.name));
        ep.add(stringProp("Header.value", header.value));
        collectionProp.add(ep)
      }
    })
  }

  toJson() {
    this.updateProps();
    return super.toJson();
  }
}

export const schema = {
  HeaderManager: HeaderManager
}
