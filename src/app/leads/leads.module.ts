import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLeadsComponent } from './list-leads/list-leads.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-tools/leads-tools.component';
import { LeadsDownloadpdfComponent } from './leads-tools/leads-downloadpdf/leads-downloadpdf.component';
import { LeadsDownloadexcelComponent } from './leads-tools/leads-downloadexcel/leads-downloadexcel.component';



@NgModule({
  declarations: [ListLeadsComponent, LeadsGridComponent, LeadsToolsComponent, LeadsDownloadpdfComponent, LeadsDownloadexcelComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
