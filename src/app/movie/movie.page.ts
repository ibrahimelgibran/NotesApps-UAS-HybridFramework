import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { videos } from "../../assets/data";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.page.html",
  styleUrls: ["./movie.page.scss"],
})
export class MoviePage implements OnInit {
  public movies = videos;
  constructor(private route: Router) {}

  backHome() {
    this.route.navigate(["/home"]);
  }

  ngOnInit() {}
}
