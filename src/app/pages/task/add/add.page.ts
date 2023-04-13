import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  isModalTaskOpen = false;

  setOpenModalTask(isOpen: boolean) {
    this.isModalTaskOpen = isOpen;
  }

  isModalRequireOpen = false;

  setOpenModalRequire(isOpen: boolean) {
    this.isModalRequireOpen = isOpen;
  }
}
