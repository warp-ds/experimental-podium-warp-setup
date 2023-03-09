import { html, css } from "lit";
import { PodiumPodletElement } from "@podium/experimental-lit-base-class";

export default class Content extends PodiumPodletElement {
  static styles = css`
    @warp-css
  `;

  render() {
    return html`<section class="grid grid-cols-2">This is a demo</section>`;
  }
}
