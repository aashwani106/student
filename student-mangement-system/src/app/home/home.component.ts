import { Component } from '@angular/core';
import { MainService } from '../servicess/main.service'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private mainService: MainService) { }


  allStudentData: any = []
  async ngOnInit() {

    try {
      let resp = await this.mainService.getAllData();
      if (resp && resp['error']) {
        console.error('Error:', resp['error']);
      } else {
        console.log('allStudentData:', resp);
        this.allStudentData = resp
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred:', error);
    }


  }
  newMark: any
  selectedStd: any
  selectedSub: any
  updatedMark: any
  selectedSno: any
  openUpdate(sno: any) {
    this.selectedSno = sno
    const modal = document.getElementById('myDialog') as HTMLDialogElement;
    modal.showModal();
    this.isDialogOpen = true;
    console.log('aaa', this.allStudentData)
    this.allStudentData.map((x: any) => {
      if (x.sno == sno) {
        console.log('found', x)
        this.selectedStd = x.name;
        this.selectedSub = x.subject;
        // updatedMark
      }
    })
  }

  isDialogOpen: boolean = false;
  closeDialog() {
    const modal = document.getElementById('myDialog') as HTMLDialogElement;
    modal.close();
    this.isDialogOpen = false;



  }
  closeDialog2() {
    const modal2 = document.getElementById('myDialog2') as HTMLDialogElement;
    modal2.close();
    this.isDialogOpen = false;



  }

  async update() {
    console.log('to update', this.selectedSno, this.updatedMark)
    // try {
    this.allStudentData.map((x: any) => {
      if (x.sno == this.selectedSno) {
        console.log('foundto update', x)
        x.marks = this.updatedMark
        this.closeDialog()
        // updatedMark
      }
    })
  }


  addStd() {
    const modal = document.getElementById('myDialog2') as HTMLDialogElement;
    modal.showModal();
  }
  addsub: any
  addStdd: any
  add() {
    console.log('to add', this.addStdd, this.addsub, this.allStudentData.length)
    this.allStudentData.push(
      {
        sno: this.allStudentData.length + 1,
        name: this.addStdd,
        subject: this.addsub,
        marks: 'not updated'
      });
  }
}
