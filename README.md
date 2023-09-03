# CO2 Emissions Tracker

Track and reduce carbon emissions from your purchases with this open-source CO2 emissions tracker.

[![GitHub License](https://img.shields.io/github/license/pogii123/CO2EmissionsTracker)](https://github.com/pogii123/CO2EmissionsTracker/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/pogii123/CO2EmissionsTracker)](https://github.com/pogii123/CO2EmissionsTracker/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pogii123/CO2EmissionsTracker)](https://github.com/pogii123/CO2EmissionsTracker/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/pogii123/CO2EmissionsTracker)](https://github.com/pogii123/CO2EmissionsTracker/stargazers)

## Table of Contents

- [About the Project](#about-the-project)
  - [Purpose](#purpose)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage (src/app/app.component.XXX)](#usage-srcappappcomponentxxx)
  - [Importing Data](#importing-data)
  - [Initialization](#initialization)
  - [Adding Random Services (for development and testing purposes)](#adding-random-services-for-development-and-testing-purposes)
  - [Adding Specific Services](#adding-specific-services)
  - [Generating Six Digits](#generating-six-digits)
  - [Calculating Total CO2](#calculating-total-co2)
  - [Important Considerations](#important-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

### Purpose

The CO2 Emissions Tracker is designed to be a versatile tool that any business or application owner or user can seamlessly integrate into their Node/Angular website. It allows them to calculate and visualize their carbon footprint per transaction. This not only raises awareness about the environmental impact of their operations but also promotes the benefits of their applications in terms of sustainability.

### Features

- Track carbon emissions for individual transactions
- Categorize emissions by product type
- View and analyze emissions
- Contribute to a sustainable future

## Getting Started

### Prerequisites

To run this project, you will need:

- Node >= 16
- see package.json for further dependencies

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/pogii123/CO2EmissionsTracker.git
   ```

2. Navigate to the project directory:
   ```sh
   cd CO2EmissionsTracker
   ```

3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage (src/app/app.component.XXX)

### Importing Data
The component imports CO2 emission data from an external JSON file named `emissions.json`. This data is used to calculate and display CO2 emissions for various categories. Those data have to be valid and have to match with the data of the provider.

### Initialization
In the `ngOnInit` lifecycle hook, the component performs several tasks:

- It sets up an event listener using jQuery to toggle the visibility of an element with the ID `expandable-div`. This toggle effect happens when an element with the ID `expand-div` is clicked.
- It logs the imported CSV data to the console.
- It calls the `addRandomService` method five times to randomly add CO2 emission services with different categories and usages. (for testing)
- It calculates the total CO2 emissions using the `calculateTotalCO2` method. 
- It generates six digits representing the total CO2 emissions (each digit in a separate variable) using the `generateSixDigits` method.
- It sets up an interval to call `addRandomService` and update the total CO2 emissions and displayed digits every 5 seconds.

### Adding Random Services (for development and testing purposes)
The `addRandomService` method selects a random category from the imported CSV data and assigns a random usage value between 1 and 3. It then calculates the CO2 emissions for this service based on the category's data and adds it to the `co2Data` array.

### Adding Specific Services
The `addService` method allows you to add services with specific categories and usages. It searches for the category data in the imported CSV data and calculates the CO2 emissions based on the provided usage. It then adds this service to the `co2Data` array. This is the most important method. Here is where you can connect your database backend (call this method everytime you write a new successfull transaction on the database)

### Generating Six Digits
The `generateSixDigits` method converts the total CO2 emissions into a string and splits it into individual digits. It assigns each digit to a separate variable (`digit1` to `digit6`). This is used for displaying the total CO2 emissions in a customized format.

### Calculating Total CO2
The `calculateTotalCO2` method iterates through the `co2Data` array and sums up the `co2Total` values to calculate the total CO2 emissions. It updates the `totalCO2` variable with the calculated value. It should be called every time you add a new service to co2Data (`addService` does it automatically). 

### Important Considerations
- Ensure that the imported `emissions.json` data is structured correctly and contains up-to-date information.
- The component uses jQuery for DOM manipulation, so make sure jQuery is properly included in your project if you intend to use it.
- The interval for adding random services and updating CO2 values is set to 5 seconds in this example. You can adjust this interval to your preference (for testing and developing).

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/Contribution`).
3. Commit your changes (`git commit -m 'Add contribution'`).
4. Push the branch (`git push origin feature/Contribution`).
5. Open a Pull Request.

There are currently no Contribution Guidelines.

## License

This project is licensed under the [GPL-3 License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## Contact

Linus Pogoda - [linus.pogoda@icloud.com](mailto:linus.pogoda@icloud.com)






