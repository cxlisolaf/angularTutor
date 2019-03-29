import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';
import { Ingredient } from '../../shared/ingredient.model';
import { Dish } from '../../shared/dish.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    //game playing:
    isReady = false;
    notReady = false;
    ingredients = [];
    dishName: string;
    bobatea = ["milk", "tea", "boba"];
    icecream = ["milk", "egg", "sugar", "juice"];


    addIngredient(newIngre: string){
      if(newIngre){
        this.ingredients.push(newIngre);
      }
    }

    cookDish() {
      if(this.ingredients.sort().toString() == this.bobatea.sort().toString()){
        this.dishName = "Boba Milk Tea";
        this.isReady = true;
      }
      else if(this.ingredients.sort().toString() == this.icecream.sort().toString()) {
        this.dishName = "Icecream";
        this.isReady = true;
      }
      else {
        this.notReady = true;
      }
    }

    emptyBasket() {
      this.ingredients = [];
      this.isReady = false;
      this.notReady = false;
    }


    getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
