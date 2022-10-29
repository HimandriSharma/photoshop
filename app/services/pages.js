import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PagesService extends Service {
  @tracked pageNumber = 1;
  //   nextPage() {
  //     this.pageNumber = this.pageNumber + 1;
  //   }
  //   prevPage() {
  //     if (this.pageNumber > 1) {
  //       this.pageNumber = this.pageNumber - 1;
  //     }
  //   }
}
