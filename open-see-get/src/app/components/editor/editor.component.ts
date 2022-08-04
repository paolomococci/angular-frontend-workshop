import {
  Component,
  OnInit
} from '@angular/core'

import {
  EditorService
} from './../../services/editor.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  typedContent = ''

  constructor(private editorService: EditorService) { }

  ngOnInit(): void {
    this.getContent()
  }

  private async getContent() {
    this.typedContent = await this.editorService.getContent()
  }

  saveContent(content: string): void {
    this.editorService.setContent(content)
  }

}
