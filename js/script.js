'use strict'

import { renCard } from "../component/component.js";
import { products} from "../data/product.js";

let renderCard = document.querySelector("#reander-card");
products.slice(0,11).map((product) => {
    renderCard.innerHTML += renCard(product);
})