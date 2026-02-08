import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestrictMenu } from "./restrict-menu/restrict-menu";
import { GamesList } from "./games-list/games-list";
import { GamesRegister } from "./games-register/games-register";
import { GamesUpdate } from "./games-update/games-update";
import { AuthGuard } from "../auth.guard";

const restrictRoutes: Routes = [
    {
        path: 'restrict-menu', component: RestrictMenu, children: [
            { path: 'list', component: GamesList, canActivate: [AuthGuard] },
            { path: 'register', component: GamesRegister, canActivate: [AuthGuard] },
            { path: 'update/:id', component: GamesUpdate, canActivate: [AuthGuard] },
        ]
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forChild(restrictRoutes)],
    exports: [RouterModule]
})
export class RestrictRoutingModule { }