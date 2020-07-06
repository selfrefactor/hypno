import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import { mapAsync, delay, range, nextIndex } from 'rambdax'

const data = [
  'file:///home/s/Downloads/ss/foo1.png',
  'file:///home/s/Downloads/ss/foo2.png',
  'file:///home/s/Downloads/ss/foo3.png',
  'file:///home/s/Downloads/ss/foo4.png',
  'file:///home/s/Downloads/ss/foo5.png',
]

const TICK = 40022

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrl: string = data[0]
  i: number = 0

  constructor(private router: Router, public electronService: ElectronService) { }

  ngOnInit(): void {
    const files = this.electronService.openDirectory()
      this.start()
   } 

   start(){
    this.i = nextIndex(this.i, data)
    delay(TICK).then(() => {
      this.imageUrl = data[this.i]
      this.start()
    })
    // const functor = async (x) => {
    //   console.log(x, this.i, data[this.i], this.imageUrl)
    //   this.imageUrl = data[this.i]
    //   await delay(TICK)
    // }

    // mapAsync(functor, range(1,100))
    // this.electronService.openDirectory()
   }
}
