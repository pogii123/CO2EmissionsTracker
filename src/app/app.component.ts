import { Component, OnInit } from '@angular/core';
import csvData from './emissions.json';

// Used for jQuery
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'co2tracker';
  csvData: any[] = csvData;
  co2Data: {
    category: string;
    usage: number;
    co2Total: number;
  }[] = [];
  totalCO2: number = 0;
  digit1: string = '0';
  digit2: string = '0';
  digit3: string = '0';
  digit4: string = '0';
  digit5: string = '0';
  digit6: string = '0';

  ngOnInit(): void {
    $("#expand-div").click(function(){
      $("#expandable-div").slideToggle();
      $("#arrow").toggleClass('flip');
    });
    console.log(csvData)
    this.addRandomService();
    this.addRandomService();
    this.addService('werkzeug',3);
    this.addService('spielzeug',2);
    this.addService('dj-equipment',1);
    this.calculateTotalCO2();
    this.generateSixDigits();
    setInterval(() => {
      this.addRandomService();
      this.calculateTotalCO2();
      this.generateSixDigits();
    }, 5000); // 5000 Millisekunden (5 Sekunden)
  }

  addRandomService() {
    const randomCategoryIndex = Math.floor(Math.random() * this.csvData.length);
    const randomCategoryData = this.csvData[randomCategoryIndex];

    // Zufällige Nutzungsanzahl / Dauer von 1-3 Tagen
    const randomUsage = Math.floor(Math.random() * 3) + 1;

    // Neuen Service hinzufügen und Berechnung aktualisieren
    this.co2Data.push({
      category: randomCategoryData.category,
      usage: randomUsage,
      co2Total: randomCategoryData.co2usage * randomUsage
    });
    console.log(`Added Random Service ${randomCategoryIndex} with ${randomUsage} usage.`);
    console.log(this.co2Data);
  }

  addService(category: string, usage: number) {
    // Sucht die entsprechenden Daten in csvData basierend auf der übergebenen Kategorie
    const categoryData = this.csvData.find(data => data.category === category);
  
    if (categoryData) {
      // Berechnet den CO2-Gesamtwert für diesen Service
      const co2Total = categoryData.co2usage * usage;
  
      // Fügt den Service zu co2Data hinzu
      this.co2Data.push({
        category: category,
        usage: usage,
        co2Total: co2Total
      });
  
      // Berechnet den neuen totalCO2-Wert
      this.calculateTotalCO2();
  
      console.log(`Added Service in category ${category} with ${usage} usage.`);
      console.log(this.co2Data);
    } else {
      console.error(`Category ${category} not found in csvData.`);
    }
  }

  private generateSixDigits() {
    var digits = this.totalCO2.toString().split('');
    console.log(`Digits have the length: ${digits.length}`)
    if (digits.length < 6) {
      if (digits.length < 5) {
        if (digits.length < 4) {
          if (digits.length < 3) {
            if (digits.length < 2) {
              this.digit6 = digits[0];
            } else {
              this.digit5 = digits[0];
              this.digit6 = digits[1];
            }
          } else {
            this.digit4 = digits[0];
            this.digit5 = digits[1];
            this.digit6 = digits[2];
          }
        } else {
          this.digit3 = digits[0];
          this.digit4 = digits[1];
          this.digit5 = digits[2];
          this.digit6 = digits[3];
        }
      } else {
        this.digit2 = digits[0];
        this.digit3 = digits[1];
        this.digit4 = digits[2];
        this.digit5 = digits[3];
        this.digit6 = digits[4];
      }
    } else {
      this.digit1 = digits[0];
      this.digit2 = digits[1];
      this.digit3 = digits[2];
      this.digit4 = digits[3];
      this.digit5 = digits[4];
      this.digit6 = digits[5];
    }
  }

  private calculateTotalCO2() {
    this.totalCO2 = 0
    this.co2Data.forEach( (element) => {
      this.totalCO2 += element.co2Total
    });
    console.log("Calculated totalCO2")
    console.log(this.totalCO2)
  }
}

