import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  selectedRow:any;

  sampleData:any []=[
    {id:1,description: "Device Cleaning", status:"In Progress", priority:"1",startDate:"2015-01-01T00:00:00",dueDate:"2016-01-01T00:00:00",completionRate:20,assignedTo:"userA"},
    {id:2,description: "Router Management", status:"To Do", priority:"2",startDate:"2017-05-01T00:00:00",dueDate:"2017-06-01T00:00:00",completionRate:0,assignedTo:"userB"},
    {id:3,description: "Cable Fix", status:"In Progress", priority:"2",startDate:"2012-06-01T00:00:00",dueDate:"2015-06-01T00:00:00",completionRate:70,assignedTo:"userC"},
    {id:4,description: "Computer Formatting", status:"To Do", priority:"7",startDate:"2011-01-01T00:00:00",dueDate:"2012-08-01T00:00:00",completionRate:0,assignedTo:"userD"},
    {id:5,description: "Program Installation", status:"Done", priority:"4",startDate:"2017-01-01T00:00:00",dueDate:"2018-11-01T00:00:00",completionRate:100,assignedTo:"userE"}
  ]

  selectTask(event:any){
    event.component.byKey(event.currentSelectedRowKeys[0]).done((data: any)=>{
      if(data){
        this.selectedRow = data;
        console.log("Hi m8, selected row is => ",data)
      }
    })
  }

  currentView:string="kanban";

  dataGridToggle(){
    this.currentView = "dataGrid";
  }
  kanbanToggle(){
    this.currentView = "kanban";
  }

  /**Kanban Part */

  currentItem:any;
  

  taskArray:any[]=[
    {
      taskId:1,
      taskName:"Device Cleaning",
      status:"In Progress",
      completionRate:20
    },
    {
      taskId:2,
      taskName:"Router Management",
      status:"To Do",
      completionRate:0
    },
    {
      taskId:3,
      taskName:"Cable Fix",
      status:"In Progress",
      completionRate:70
    },
    {
      taskId:4,
      taskName:"Computer Formatting",
      status:"To Do",
      completionRate:0
    },
    {
      taskId:5,
      taskName:"Program Installation",
      status:"Done",
      completionRate:100
    },
    {
      taskId:6,
      taskName:"General Manager Meeting",
      status:"Done",
      completionRate:100
    },
    {
      taskId:7,
      taskName:"Sale Manager Meeting",
      status:"Done",
      completionRate:100
    },
    {
      taskId:8,
      taskName:"Estimated Value Negotiation",
      status:"Done",
      completionRate:100
    },
  ]

  filterTasks(status:string){
    //filtered array is saved to the taskArray
    //when changes made a save button can be placed ? 
    return this.taskArray.filter(m=>m.status == status);
  }

  onDragStart(item:any){
    this.currentItem = item;/* 
    console.log("DragStart") */
  }

  onDrop(e:any,status:string){
    e.preventDefault();/* 
    console.log("Dropped")
    console.log("PopupValue",this.popupValue)
    console.log("CurrentItem",this.currentItem) */

    const record = this.taskArray.find(m=>m.taskId == this.currentItem.taskId);

    if(record!=undefined){
      record.status = status;
      if(status === "Done"){
        record.completionRate=100;
      }
      else if(status === "To Do"){
        record.completionRate=0;
      }
      else if(status === "In Progress"){
        this.popupCondition = true;
        this.itemSelection(record);
        console.log("record.completionRate: ",record.completionRate)
        console.log("record.completionRate: ",record.completionRate)
        if(record.completionRate !== 0 || record.completionRate !== 100) {
          this.popupCondition = false;
        }
      }

      if(record.completionRate === 100){
        record.status == "Done";
        console.log("here1")
      }
      else if(record.completionRate < 100 || record.completionRate > 0){
        record.status == "In Progress";
        console.log("here2")
      }
      else if(record.completionRate === 0){
        record.status == "To Do";
        console.log("here3")
      }
    }
    this.currentItem = null;
  }

  onDragOver(e:any){/* 
    console.log("Dragging") */
    e.preventDefault();
  }

  //kanban customization

  isPopupVisible:boolean=false;
  popupValue!:any;
  popupValue_taskId!:string;
  popupValue_taskName!:string;
  popupValue_completionRate!:number;
  popupValue_status!:string;
  isDisabled:boolean=true;
  isDragable:boolean=false;

  itemSelection(item:any){
    this.popupValue = item;
    this.popupValue_taskId = item.taskId;
    this.popupValue_taskName = item.taskName;
    this.popupValue_completionRate = item.completionRate/100;
    this.popupValue_status = item.status;
    this.isPopupVisible = !this.isPopupVisible;
  }

  closePopupScreen(){
    this.isPopupVisible = !this.isPopupVisible;
  }

  resetPopupValue(e:any){
    //resets changes back to base values ?
  }

  editFinishedTasks(){
    this.isDragable = !this.isDragable;
    this.isDisabled = !this.isDisabled;
    this.isBtn1Visible = !this.isBtn1Visible;
  }

  isBtn1Visible:boolean = true;

  lockFinishedTasks(){
    this.isDragable = !this.isDragable;
    this.isDisabled = !this.isDisabled;
    this.isBtn1Visible = !this.isBtn1Visible;
  }

  updateCompletionRate(e: any) {
    //save changes to db ?!!!
    this.popupValue.completionRate = e.value * 100;
    this.popupCondition = true;

    if (this.popupValue.completionRate === 100) {
      const record = this.taskArray.find(m => m.taskId == this.popupValue.taskId);
      if (record != undefined) {
        record.status = "Done";
      }
    }
    else if (this.popupValue.completionRate === 0) {
      const record = this.taskArray.find(m => m.taskId == this.popupValue.taskId);
      if (record != undefined) {
        record.status = "To Do";
      }
    }
    else if (this.popupValue.completionRate > 0 || this.popupValue.completionRate < 100) {
      const record = this.taskArray.find(m => m.taskId == this.popupValue.taskId);
      if (record != undefined) {
        record.status = "In Progress";
      }
    }
  }

  popupCondition:boolean=true;

  popupCloseCondition(e:any){
    if(!this.popupCondition){
      e.cancel = true;
      alert('Enter a value to completion rate!!!');
    }
  }
}
