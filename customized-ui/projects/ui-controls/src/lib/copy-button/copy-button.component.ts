import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core'

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.sass']
})
export class CopyButtonComponent implements OnInit {

  @Input() data = ''

  @Output() copied = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onCopy() {
    this.copied.next()
  }

}
