import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  pinFormatter(value: number) {
    return `${value}%`;
  }

  isModalTaskOpen = false;

  setOpenModalTask(isOpen: boolean) {
    this.isModalTaskOpen = isOpen;
  }

  isModalRequireOpen = false;

  setOpenModalRequire(isOpen: boolean) {
    this.isModalRequireOpen = isOpen;
  }
}
