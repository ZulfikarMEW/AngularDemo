import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css'],
})
export class SectorComponent implements OnInit {
  @Output() titleEvent = new EventEmitter<string>();

  sectorList: string[] = [
    'Ministers Sector',
    'Undersecretary Sector',
    'Power stations sector',
    'Transport Network Sector',
    'Planning, Training and Information Systems Sector',
    'Distribution network sector',
    'Financial Affairs Sector',
    'Water Projects Sector',
    'Administrative Affairs Sector',
    'Water Operation and Maintenance Sector',
    'Technical Services Affairs Sector',
    'Customer Service Sector',
    'Monitoring and Control Centers Sector',
  ];

  newSector: string = '';
  editMode: boolean = false;

  editIndex: number = -1;

  constructor() {
    this.titleEvent.emit('Sector');
  }

  ngOnInit(): void {}

  onAddNew() {
    if (this.newSector) this.sectorList.push(this.newSector);
    this.newSector = '';
  }

  onEdit(text: string) {
    this.newSector = text;
    this.editIndex = this.sectorList.indexOf(this.newSector);
    this.editMode = true;
  }

  onDelete(text: string) {
    this.editIndex = this.sectorList.indexOf(text);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to delete " + text + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.sectorList.splice(this.editIndex, 1);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  onEditSave() {
    this.sectorList[this.editIndex] = this.newSector;

    this.editMode = false;
    this.editIndex = -1;
    this.newSector = '';
  }
}
