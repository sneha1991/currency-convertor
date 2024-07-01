import { Routes } from "@angular/router";
import { ConvertorComponent } from "./components/convertor/convertor.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: ConvertorComponent,
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "**",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
];
