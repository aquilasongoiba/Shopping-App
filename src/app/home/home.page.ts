import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environement } from 'src/models/environements';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nom: string;
  description: string;
 
  constructor(private http: HttpClient) {
 this.loadArticles();
  }
 // Afficher les articles de la base
  loadArticles() {
   const url = `${environement.api_url}/Articles`;
   this.http.get(url).subscribe(article  => console.log('article', article));
   console.log('url:', url);
  }
// inserer un article dans la base
  insertArticles() {
    const url = `${environement.api_url}/Articles`;
    this.http.post(url, {nom: this.nom, description: this.description }).subscribe(results => console.log('results', results));
}

// updater un article de la base
updateArticles(){
  const id: string  = '5e46b6e99949d40c44a82e0e';
  const url = `${environement.api_url}/Articles/${id}`;
  this.http.patch(url, {nom: 'chemise(updated)'}).subscribe(results => console.log('results', results));
}

// supprimer un article de la base
removeArticles(){
  const id: string  = '5e4761f539475e123cc61e63';
  const url = `${environement.api_url}/Articles/${id}`;
  this.http.delete(url).subscribe(results => console.log('results', results));
}

}
