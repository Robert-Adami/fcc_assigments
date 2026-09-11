const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

// odstráni undefined / prázdne sloty, vráti nové pole; loguje len ak sa naozaj niečo odstránilo
function compactFragments(arr) {
  const filtered = arr.filter((e) => e !== undefined);
  if (filtered.length < arr.length) {
    console.log("[COMPACTED] removed empty elements");
  }
  return filtered;
}
 
const compactedShuffledFragments = compactFragments(shuffledFragments);
 
// bubble sort podľa id (bez vstavaného .sort), na kópii, stabilný vďaka ostrému >
function sortFragments(arr) {
  const copy = [...arr];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < copy.length - 1; i++) {
      if (copy[i].id > copy[i + 1].id) {
        const temp = copy[i];
        copy[i] = copy[i + 1];
        copy[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return copy;
}
 
const sortedFragments = sortFragments(compactedShuffledFragments);
 
// odstráni duplicity (rovnaké id vedľa seba), nechá prvý výskyt; loguje pri každom zahodení
function dedupeFragments(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.length === 0 || result[result.length - 1].id !== arr[i].id) {
      result.push(arr[i]);
    } else {
      console.log("[DEDUPED] id " + arr[i].id);
    }
  }
  return result;
}
 
const dedupedFragments = dedupeFragments(sortedFragments);
 
// doplní diery medzi najnižším a najvyšším id placeholderom; loguje pri každom doplnení
function fillMissingFragments(arr) {
  const newArr = [];
  const lowest = arr[0].id;
  const highest = arr[arr.length - 1].id;
  for (let i = lowest; i <= highest; i++) {
    const found = arr.find((element) => element.id === i);
    if (found) {
      newArr.push(found);
    } else {
      newArr.push({ id: i, text: "[...]" });
      console.log("[FILLED] id " + i);
    }
  }
  return newArr;
}
 
const filledFragments = fillMissingFragments(dedupedFragments);
 
// spojí texty všetkých fragmentov novými riadkami do jedného string
function assembleStory(arr) {
  return arr.map((obj) => obj.text).join("\n");
}