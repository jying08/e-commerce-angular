import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required:true}) duration=0;
  @Input({required:true}) message='';

  counter=signal(0);
  counterRef:number| undefined;

  constructor()
  {
    //NO ASYNC
    // BEFORE RENDER antes del render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // BEFORE RENDER PERO TAMBIEN DURANTE EL DENDER
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration= changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.soSomething();
    }
    
    
  }
  
  ngOnInit()
  {
    // alter render despues del render y solo corre una vez
    // PERFECTAR PARA LAS COSAS ASINCRONAS
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef= window.setInterval(()=>{
      console.log('run interval');
      
      this.counter.update(statePrev=>statePrev + 1);
    },1000)
    
  }

  ngAfterViewInit()
  {
    //after render
    //hijos ya fueron pintador
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
    
  }

  ngOnDestroy()
  {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  soSomething()
  {
    console.log('change duration');
    
  }

}
