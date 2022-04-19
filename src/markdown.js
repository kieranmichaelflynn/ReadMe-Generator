function generateReadme(response){

    // Main logic to generate README
    
    return `
# ${response.name}

![License](https://img.shields.io/badge/License-${response.license.replace(/-/g, '--')}-blue)

${response.desc}

## Table of Contents

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [License](#license)
3.  [Credits](#credits)
4.  [Questions](#questions)


## Installation 

${response.install}

## Usage

${response.usage}

## License
This project is created under the ${response.license} license

## Credits
This project was created by [${response.credit}](https://github.com/${response.credit})

## Questions
To see it yourself, visit my GitHub repository at ${response.repo}

If you have any further questions, reach out to me at ${response.email} 

Thank you for reading, enjoy ${response.name}!
    
`

}


module.exports = generateReadme;