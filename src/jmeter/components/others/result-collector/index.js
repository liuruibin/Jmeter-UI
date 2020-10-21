import HashTreeElement from "@/jmeter/hashtree";

const DEFAULT_OPTIONS = {
  options: {
    attributes: {
      guiclass: "ViewResultsFullVisualizer",
      testclass: "ResultCollector",
      testname: "View Results Tree",
      enabled: "true"
    },
  }
};

export const TYPE = "ResultCollector";

export default class ResultCollector extends HashTreeElement {
  constructor(options = DEFAULT_OPTIONS) {
    super(options);
    this.$type = TYPE;
  }
}

export const schema = {
  name: "ResultCollector",
  class: ResultCollector
}
