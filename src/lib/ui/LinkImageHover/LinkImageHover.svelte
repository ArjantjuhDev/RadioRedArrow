<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade, fly, scale } from "svelte/transition";

  export let hrefDetails = {
    href: "https://in.pinterest.com/pin/724375921339895692/",
    text: "Mumbai City",
    imgSrc:
      "https://i.pinimg.com/736x/7e/61/74/7e6174c858a5aa169de033f55fc3050c.jpg",
    imgAlt: "Mumbai",
  };

  let isHover = false;
  let x = spring(0, {
    stiffness: 0.1,
    damping: 0.3,
  });
  let y = spring(100, {
    stiffness: 0.1,
    damping: 0.3,
  });

  let linkEffect = (node: HTMLElement) => {

    node.addEventListener("mouseenter", (e) => {
      y.set(node.getBoundingClientRect().top-200)
      // console.log("hover", e.clientY, e.clientX, e.offsetY, e.offsetX);
      isHover = true;
    });
    node.addEventListener("mousemove", (e) => {
      x.set(e.clientX - 120);
      // y.set(e.clientY + -200);

    });
    node.addEventListener("mouseleave", (e) => {
      isHover = false;
    });
  };
</script>

{#if isHover}
  <img
    in:scale={{ duration: 200, delay: 200 }}
    style="position: absolute; top:{$y}px; left:{$x}px; z-indez: 100;"
    src={hrefDetails.imgSrc}
    alt={hrefDetails.imgAlt}
    class="h-44 w-56 rounded-lg shadow-lg object-cover object-center"
  />
{/if}
<a
  use:linkEffect
  href={hrefDetails.href}
  target="_blank"
  class="text-md cursor-pointer mx-1 no-underline"
>
  {hrefDetails.text}
</a>
