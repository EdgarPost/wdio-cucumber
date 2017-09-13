const axios = require('axios')
const fs = require('fs')

const instance = new axios.create({
  baseURL: 'https://testrail.mediamonks.net/index.php?/api/v2/',
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'group-qa@mediamonks.com',
    password: '<3\\EMb3XX}BLyq:*$]6m'
  },
})

instance.interceptors.response.use(response => response.data)

const store = {
  features: [],
  cases: [],
}

const getSections = id => instance.get(`get_sections/${id}`)
const getCases = id => instance.get(`get_cases/${id}`)

// const createRun = (id, name, description, cases) =>  instance.post(`add_run/${id}`, {
//   name,
//   description,
//   cases: cases.filter(case_ => case_.id)
// })
//
// const addResults = (id, results) => instance.post(`add_results/${id}`, {
//   results
// })

const loadFeatures = getSections(21).then(sections => {
  return sections.filter(section => section.name.startsWith('Feature:'))
})

const loadCases = getCases(21).then(cases => {
  return cases.filter(case_ => case_.title.startsWith('Scenario:'))
})

const getFeatures = () => store.features.map(feature => Object.assign(
  feature,
  {
    cases: store.cases.filter(case_ => case_.section_id === feature.id)
  }
))

const formatStep = step => step.replace(/\r?\n|\r/, '|').split('|').filter(String).join('\n    ')

const createGherkins = feature => {
  const { name, cases } = feature;
  let gherkins = `${name}\n\n`;
  const filename = `./features/${name.replace('Feature: ', '')}.feature`;

  cases.forEach(case_ => {
    const preconds = formatStep(case_.custom_preconds);
    const steps = formatStep(case_.custom_steps);
    const expected = formatStep(case_.custom_expected);

    gherkins += `  ${case_.title}\n`
    gherkins += `    ${[preconds]}\n`
    gherkins += `    ${steps}\n`
    gherkins += `    ${expected}\n`
  });

  fs.writeFile(filename, gherkins, error => {
    if(error) {
      console.error(error)
    }

    console.log(`${filename} written`);
  });
};

// Import (and overwrite existing) cases
Promise.all([loadFeatures, loadCases]).then(result => {
  store.features = result[0]
  store.cases = result[1]

  // generate feature files
  getFeatures().forEach(createGherkins);
}).catch(error => console.error(error))

// CREATE RUN
// createRun(21, 'Cucumber', `Automated cucumber test-run`, store.cases).then(data => {
//   console.log('New test run ID:', data.id)
//
//   addResults(data.id, [
//    // tests
//   ]);
// });


