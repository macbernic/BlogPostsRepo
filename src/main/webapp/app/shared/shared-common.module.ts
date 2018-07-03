import { NgModule } from '@angular/core';

import { BlogPostsRepoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BlogPostsRepoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BlogPostsRepoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BlogPostsRepoSharedCommonModule {}
