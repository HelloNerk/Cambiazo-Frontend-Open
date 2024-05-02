import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {PostsService} from "../../../content/service/posts/posts.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-dialog-product-categories',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './dialog-product-categories.component.html',
  styleUrl: './dialog-product-categories.component.css'
})
export class DialogProductCategoriesComponent implements OnInit{
  categoryForm : FormGroup

  constructor(private _fb:FormBuilder,private postService: PostsService
    ,private dialog:DialogRef<DialogProductCategoriesComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.categoryForm = this._fb.group({
      name:'',
    });

  }

  ngOnInit() {
    if(this.data){
     this.postService.getCategoryProductById(this.data).subscribe(res=>{
       this.categoryForm.patchValue(res);
     })
    }
  }



  addProductCategory(){
    if(!this.data)this.postService.postCategoryProduct(this.categoryForm.value).subscribe()
    else this.postService.putCategoryProduct(this.data,this.categoryForm.value).subscribe()
    this.dialog.close()
  }

  onCancel(){
    this.dialog.close()
  }

}
