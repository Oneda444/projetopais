import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items:any;
  ngOnInit() {
    this.initializeItems();
  }
 

  initializeItems() {
    this.items = [
      {nome: "Ação Lages - Belisario Ramos", imagem: 'mundofeliz.jpg' },
      {nome: "Ação florianopolis - praia leste", imagem: 'mundofeliz.jpg' },
      {nome: "Ação Imbituba - praia sul", imagem: 'mundofeliz.jpg' },
      {nome: "Ação São Paulo - guarulhos ", imagem: 'mundofeliz.jpg' }
      
    ];
  }  
    
    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();
      // set val to the value of the ev target
      var val = ev.target.value;
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

  }
