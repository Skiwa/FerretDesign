import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quote;
  author;
  next = 0;
  constructor() { }

  ngOnInit() {

    this.quote = "Not able to tell you how happy I am with FerretDesign. After using FerretDesign my business skyrocketed!";
    this.author = "- Noemi J.";

    this.rotation();
    setInterval(()=>{ this.rotation() },4200);
  }

  rotation() {
    this.next ++;
    switch(this.next){
      case 1:
        this.quote = "Thank you so much for your help. We have no regrets!";
        this.author = "- Tiler Q.";
        break;
      case 2:
        this.quote = "Very easy to use. We were treated like royalty. FerretDesign is the real deal!";
        this.author = "- Benito G.";
        break;
      case 3:
        this.quote = "I can't say enough about FerretDesign.";
        this.author = "- Donielle G.";
        break;
      case 4:
        this.quote = "I wish I would have thought of it first. If you aren't sure, always go for FerretDesign.";
        this.author = "- Donia C.";
        break;
      case 5:
        this.quote = "You guys rock! Absolutely wonderful!";
        this.author = "- Bryn F.";
        break;
      case 6:
        this.quote = "Absolutely not a testimony generator.";
        this.author = "- me";
        this.next = 0;
        break;
    }
    this.fadeIn();

    setTimeout(() => {this.fadeOut();}, 3500)
  }

  fadeIn(){
    var el = document.getElementById('quoteText');
    el.classList.remove('hidden');
    el.classList.add('shown');
  }

  fadeOut(){
    var el = document.getElementById('quoteText');
    el.classList.remove('shown');
    el.classList.add('hidden');
  }

}
