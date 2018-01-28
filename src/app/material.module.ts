import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { MatButtonModule,MatToolbarModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule} from '@angular/material';

@NgModule({

    imports:[MatButtonModule, MatToolbarModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule],
    exports:[MatButtonModule, MatToolbarModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule]

})

export class MaterialModule{ }