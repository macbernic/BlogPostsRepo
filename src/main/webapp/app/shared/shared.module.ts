import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { BlogPostsRepoSharedLibsModule, BlogPostsRepoSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [BlogPostsRepoSharedLibsModule, BlogPostsRepoSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [BlogPostsRepoSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogPostsRepoSharedModule {}
