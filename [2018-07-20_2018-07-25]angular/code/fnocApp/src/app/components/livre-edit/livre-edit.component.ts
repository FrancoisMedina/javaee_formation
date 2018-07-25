import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Livre } from '../../metier/livre';
import { LivreRepositoryService } from '../../services/livre-repository.service';

@Component({
  selector: 'app-livre-edit',
  templateUrl: './livre-edit.component.html',
  styleUrls: ['./livre-edit.component.css']
})
export class LivreEditComponent implements OnInit, OnChanges {

  @Input() public editId : number;
  public currentLivre : Livre;
  

  constructor(private livreRepository : LivreRepositoryService) {

   }

  ngOnInit() {
    this.currentLivre = new Livre(0, "rien", "aucun", 10.0);
  }

  ngOnChanges(changes: any) {
    if (this.editId == 0) {
      this.currentLivre = new Livre(0, "rien", "aucun", 10.0);
    }
    else {
      this.livreRepository.findById(this.editId)
                          .subscribe(livre => {
                            this.currentLivre = livre;
                          });
    }
  }
}
