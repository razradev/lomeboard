import "./style.css";
import Alpine from "alpinejs";
import ajax from "@imacrayon/alpine-ajax";
import component from "alpinejs-component";

window.Alpine = Alpine;

Alpine.plugin(ajax);
Alpine.plugin(component);

Alpine.store("shop", {
  name: "Alpine-Shop",
  products: ["Swiss Alp Chocolate", "Car Alpine A110"],
});

Alpine.start();
