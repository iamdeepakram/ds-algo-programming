let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let numberOfAgents = parseInt(readLine());
let namesOfAgents = readLine().split(" ");

function findMaxWorkingPlanets(numberOfAgents, namesOfAgents) {
    function generatePermutations(namesOfAgents) {
      if (namesOfAgents.length <= 1) {
        return [namesOfAgents];
      }
  
      let perms = [];
      for (let i = 0; i < namesOfAgents.length; i++) {
        let subPermutations = generatePermutations(namesOfAgents.slice(0, i) + namesOfAgents.slice(i + 1));
        for (let subPerm of subPermutations) {
          perms.push(namesOfAgents[i] + subPerm);
        }
      }
      return perms;
    }
  
    let planetAgents = {};
  
    for (let agent of namesOfAgents) {
      let jumbledNames = generatePermutations(agent);
  
      for (let jumbledName of jumbledNames) {
        if (!planetAgents[jumbledName]) {
          planetAgents[jumbledName] = 0;
        }
        planetAgents[jumbledName]++;
      }
    }
  
    let maxWorkingPlanets = 0;
    for (let count of Object.values(planetAgents)) {
      maxWorkingPlanets = Math.max(maxWorkingPlanets, count);
    }
  
    return maxWorkingPlanets;
  }
  
  let result = findMaxWorkingPlanets(numberOfAgents, namesOfAgents);
  console.log(result); // Output: 2
  