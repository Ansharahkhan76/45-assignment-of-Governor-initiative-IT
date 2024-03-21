function describe_city(city, country = 'Pakistan'): void {
    console.log(`${city}, is in ${country}`)
}

describe_city('Karachi') // Default Sentence
describe_city('France', 'Europe')
describe_city('Lahore', 'is in Pakistan')
