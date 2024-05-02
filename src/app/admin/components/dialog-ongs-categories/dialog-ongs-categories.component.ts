import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {OngsService} from "../../../content/service/ongs/ongs.service";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-dialog-ongs-categories',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './dialog-ongs-categories.component.html',
  styleUrl: './dialog-ongs-categories.component.css'
})
export class DialogOngsCategoriesComponent implements OnInit{
  categoryForm : FormGroup

  constructor(private _fb:FormBuilder,private ongsService: OngsService
    ,private dialog:DialogRef<DialogOngsCategoriesComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.categoryForm = this._fb.group({
      name:'',
    });

  }

  ngOnInit() {
    if(this.data){
      this.ongsService.getCategoryOngById(this.data).subscribe(res=>{
        this.categoryForm.patchValue(res);
      })
    }
  }



  addOngCategory(){
    if(!this.data)this.ongsService.postCategoryOng(this.categoryForm.value).subscribe()
    else this.ongsService.putCategoryOng(this.data,this.categoryForm.value).subscribe()
    this.dialog.close()
  }

  onCancel(){
    this.dialog.close()
  }

}
