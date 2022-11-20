import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["watchons"],
      typeSpeed: 50,
      loop: true
    })
  }
}
