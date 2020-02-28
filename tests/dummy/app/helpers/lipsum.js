import { LoremIpsum } from "lorem-ipsum";
import { helper } from "@ember/component/helper";

const lorem = new LoremIpsum({
  format: 'html',
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function lipsum(args) {
  let [amount] = args;
  return lorem.generateParagraphs(amount);
}

export default helper(lipsum);
